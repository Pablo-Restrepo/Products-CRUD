package com.pablo736.productscrud.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;

import org.springframework.stereotype.Component;

@Component
public class base64Image {
    public String convertImageToBase64(String imagePath) {
        try {

            File imageFile = new File(imagePath);
            FileInputStream fileInputStream = new FileInputStream(imageFile);
            byte[] imageBytes = new byte[(int) imageFile.length()];
            fileInputStream.read(imageBytes);
            fileInputStream.close();
            return Base64.getEncoder().encodeToString(imageBytes);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
