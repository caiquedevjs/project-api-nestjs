import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Minha API')
    .setDescription('Descrição da minha API')
    .setVersion('1.0')
    .addTag('users', 'Operações relacionadas a usuários')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
