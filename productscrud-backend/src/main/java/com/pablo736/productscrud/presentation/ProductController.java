package com.pablo736.productscrud.presentation;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pablo736.productscrud.domain.entity.Product;
import com.pablo736.productscrud.domain.service.IProductService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("products")
public class ProductController {
    @Autowired
    private IProductService productService;

    /**
     * Busca todos los productos
     * 
     * @return Lista de productos
     */
    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Product> findAll() {
        return (List<Product>) productService.findAll();
    }

    /**
     * Busca un producto por su id
     * 
     * @param id id del producto
     * @return producto
     */
    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Product findById(@PathVariable Long id) {
        return productService.find(id);
    }

    /**
     * Crea un producto
     * 
     * @param product producto a crear
     * @return producto creado
     * @throws IOException
     */
    @RequestMapping(method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Product create(@RequestBody Product product) throws IOException {

        return productService.create(product);
    }

    /**
     * Actualiza un producto
     * 
     * @param product producto a actualizar
     * @param id      id del producto a actualizar
     * @return producto eliminado
     */

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, produces = "application/json")
    @ResponseBody
    public Product update(@RequestBody Product product, @PathVariable Long id) {
        return productService.update(id, product);
    }

    /**
     * Elimina un producto
     * 
     * @param id id del producto a eliminar
     */
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = "application/json")
    @ResponseBody
    public void delete(@PathVariable Long id) {
        productService.delete(id);
    }
}
