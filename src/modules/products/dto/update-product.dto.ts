import { IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  @IsNotEmpty()
  product_code: number;

  @IsDecimal()
  @IsNotEmpty()
  new_price: number;
}

export class UploadProductDto {
  code: number;
  name: string;
  sales_price: number;
  new_price: number;
  error: { message: string; hasError: boolean };
}
