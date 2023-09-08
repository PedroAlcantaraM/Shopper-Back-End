import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';
import * as csv from 'csv-parser';
import * as fs from 'fs';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  async findAll() {
    return await this.productsRepository.findAll();
  }

  async findOne(code: number) {
    const product = await this.productsRepository.findOne(code);
    return product;
  }

  async upload() {
    const result = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream('tmp/file.csv')
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => resolve(result))
        .on('error', (error) => reject(error));
    });

    const newResProducts = await this.productsRepository.upload(result);
    return newResProducts;
  }

  async update() {
    const result = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream('tmp/file.csv')
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => resolve(result))
        .on('error', (error) => reject(error));
    });

    const newPriceProducts = await this.productsRepository.update(result);
    return newPriceProducts;
  }
}
