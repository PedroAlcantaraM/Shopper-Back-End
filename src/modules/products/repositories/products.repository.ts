import { UpdateProductDto, UploadProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository {
  abstract findOne(code: number): Promise<Product> | Product;
  abstract findAll(): Promise<Product[]> | Product[];
  abstract upload(data: UpdateProductDto[]): Promise<UploadProductDto[]>;
  abstract update(data: UpdateProductDto[]): Promise<UpdateProductDto[]>;
}
