package com.pablo736.productscrud.domain.service;

import java.util.List;

import com.pablo736.productscrud.domain.entity.Product;

public interface IProductService {
    public List<Product> findAll();

    public Product find(Long id);

    public Product create(Product object);

    public Product update(Long id, Product object);

    public void delete(Long id);
}
