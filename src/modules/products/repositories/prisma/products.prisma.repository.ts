import { PrismaService } from 'src/database/prisma.service';
import {
  UpdateProductDto,
  UploadProductDto,
} from '../../dto/update-product.dto';
import { Product } from '../../entities/product.entity';
import { ProductsRepository } from '../products.repository';
import { plainToInstance } from 'class-transformer';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ProductsPrismaRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}
  async upload(data: UpdateProductDto[]): Promise<UploadProductDto[]> {
    const verifyData = [];
    for (const attProducts of data) {
      const code = Number(attProducts.product_code);
      const new_price = Number(attProducts.new_price);
      const attProductsValue = Object.values(attProducts);
      const product = await this.prisma.products.findFirst({
        where: { code },
      });
      const productRes = {
        ...product,
        new_price: new_price,
        error: { message: '', hasError: false },
      };

      if (!product) {
        productRes.error.message = 'Forneça um código valido';
        productRes.error.hasError = true;
      }
      if (!attProductsValue[0] || !attProductsValue[1]) {
        productRes.error.message = 'É necessario preencher todos os campos';
        productRes.error.hasError = true;
      }

      if (product) {
        if (attProducts.new_price <= product.cost_price) {
          productRes.error.message =
            'Novo valor do produto deve ser maior que o preço de custo';
          productRes.error.hasError = true;
        }
        if (attProducts.new_price > product.sales_price * 1.1) {
          productRes.error.message =
            'Novo valor esta acima de 10% do preço antigo';
          productRes.error.hasError = true;
        }
        if (attProducts.new_price < product.sales_price * 0.9) {
          productRes.error.message =
            'Novo valor esta abaixo de 10% do preço antigo';
          productRes.error.hasError = true;
        }
        /*  if (
          attProducts.new_price + attProducts.new_price * 0.1 <
          product.sales_price
        ) {
          productRes.error.message = 'Novo valor esta abaixo de 10%';
          productRes.error.hasError = true;
        } */
      }

      verifyData.push(productRes);
    }
    return plainToInstance(UploadProductDto, verifyData);
  }
  async findOne(code: number): Promise<Product> {
    const product = await this.prisma.products.findFirst({
      where: { code },
    });

    return plainToInstance(Product, product);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.products.findMany();
    return plainToInstance(Product, products);
  }

  async update(data: UpdateProductDto[]): Promise<UpdateProductDto[]> {
    for (const products of data) {
      const code = Number(products.product_code);
      const sales_price = Number(products.new_price);
      await this.prisma.products.update({
        where: { code },
        data: { sales_price },
      });
    }

    fs.unlink('tmp/file.csv', (err) => {
      if (err) {
        console.error('Erro ao apagar o arquivo:', err);
      } else {
        console.log('Arquivo apagado com sucesso.');
      }
    });

    return null;
  }
}
