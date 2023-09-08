import {
  Controller,
  Get,
  Patch,
  Param,
  UploadedFile,
  UseInterceptors,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.productsService.findOne(+code);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.productsService.upload();
  }

  @Patch('update')
  update() {
    return this.productsService.update();
  }
}
