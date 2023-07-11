package com.pablo736.productscrud.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pablo736.productscrud.access.IProductRepository;
import com.pablo736.productscrud.domain.entity.Product;

@Service // Para que sea un componente de Spring
public class ProductServiceImpl implements IProductService {
    @Autowired // Inyecta una dependencia
    private IProductRepository repository;

    /**
     * Busca todos los productos
     * 
     * @return Lista de productos
     */
    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        return (List<Product>) repository.findAll();
    }

    /**
     * Busca un producto por su id
     * 
     * @param id id del producto
     * @return producto
     */
    @Override
    @Transactional
    public Product find(Long id) {
        Product product = repository.findById(id).orElse(null);
        return product;
    }

    /**
     * Crea un producto
     * 
     * @param product producto a crear
     * @return producto creado
     */
    @Override
    @Transactional
    public Product create(Product product) {
        Product savedProduct = repository.save(product);
        return savedProduct;
    }

    /**
     * Actualiza un producto
     * 
     * @param id      id del producto
     * @param product producto a actualizar
     * @return producto actualizado
     */
    @Override
    @Transactional
    public Product update(Long id, Product product) {
        Product productUpdate = this.find(id);
        productUpdate.setName(product.getName());
        productUpdate.setPrice(product.getPrice());
        // Save the product
        Product updateProduct = repository.save(productUpdate);
        return updateProduct;
    }

    /**
     * Elimina un producto
     * 
     * @param id id del producto
     */
    @Override
    @Transactional
    public void delete(Long id) {
        Product productDelete = this.find(id);
        if (productDelete != null) {
            repository.deleteById(id);
        }
    }
}