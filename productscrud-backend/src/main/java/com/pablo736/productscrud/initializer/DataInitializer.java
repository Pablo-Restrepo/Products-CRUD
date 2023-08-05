package com.pablo736.productscrud.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.pablo736.productscrud.access.IProductRepository;
import com.pablo736.productscrud.domain.entity.Product;
import com.pablo736.productscrud.utilities.base64Image;

import java.util.Date;
import java.util.List;

@Component
public class DataInitializer implements ApplicationRunner {

    private final IProductRepository productRepository;
    private final base64Image base64image;

    @Autowired
    public DataInitializer(IProductRepository productRepository, base64Image base64image) {
        this.productRepository = productRepository;
        this.base64image = base64image;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        String relativePath = "src\\main\\java\\com\\pablo736\\productscrud\\initializer\\images\\";

        String imagePath1 = relativePath + "image1.jpg";
        String imagePath2 = relativePath + "image2.jpg";
        String imagePath3 = relativePath + "image3.jpg";
        String imagePath4 = relativePath + "image4.jpg";
        String imagePath5 = relativePath + "image5.jpg";
        String imagePath6 = relativePath + "image6.jpg";
        String imagePath7 = relativePath + "image7.jpg";
        String imagePath8 = relativePath + "image8.jpg";
        String imagePath9 = relativePath + "image9.jpg";
        String imagePath10 = relativePath + "image10.jpg";

        Product product1 = new Product(null, "iPhone 13 Pro",
                "El ultimo modelo de iPhone con potentes caracteristicas.", 999.99,
                base64image.convertImageToBase64(imagePath1), new Date());
        Product product2 = new Product(null, "Samsung Galaxy S21",
                "Telefono Android de gama alta con una pantalla impresionante.", 799.99,
                base64image.convertImageToBase64(imagePath2), new Date());
        Product product3 = new Product(null, "Sony PlayStation 5",
                "La consola de videojuegos mas reciente de Sony con graficos de ultima generacion.", 499.99,
                base64image.convertImageToBase64(imagePath3), new Date());
        Product product4 = new Product(null, "MacBook Pro",
                "Potente laptop con un diseno elegante y rendimiento excepcional.", 1499.99,
                base64image.convertImageToBase64(imagePath4), new Date());
        Product product5 = new Product(null, "Nike Air Max 270",
                "Zapatillas deportivas con estilo y comodidad para el dia a dia.", 129.99,
                base64image.convertImageToBase64(imagePath5), new Date());
        Product product6 = new Product(null, "Canon EOS R5",
                "Camara de fotograma completo con resolucion de alta calidad y grabacion de video 8K.", 3499.99,
                base64image.convertImageToBase64(imagePath6), new Date());
        Product product7 = new Product(null, "Fitbit Charge 4",
                "Rastreador de actividad fisica con GPS integrado y monitorizacion continua del ritmo cardiaco.",
                149.99,
                base64image.convertImageToBase64(imagePath7), new Date());
        Product product8 = new Product(null, "Instant Pot Duo",
                "Olla a presion multifuncional para cocinar de manera rapida y sencilla.", 79.99,
                base64image.convertImageToBase64(imagePath8), new Date());
        Product product9 = new Product(null, "Dyson V11 Absolute",
                "Aspiradora inalambrica de alto rendimiento con tecnologia de succion potente.", 599.99,
                base64image.convertImageToBase64(imagePath9), new Date());
        Product product10 = new Product(null, "Kindle Paperwhite",
                "E-reader con pantalla de alta resolucion y luz frontal ajustable para una experiencia de lectura comoda.",
                129.99,
                base64image.convertImageToBase64(imagePath10), new Date());

        this.productRepository.saveAllAndFlush(List.of(product1, product2, product3, product4, product5, product6,
                product7, product8, product9, product10));
    }
}
