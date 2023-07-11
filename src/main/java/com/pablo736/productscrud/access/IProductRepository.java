package com.pablo736.productscrud.access;

import org.springframework.data.repository.CrudRepository;

import com.pablo736.productscrud.domain.entity.Product;

public interface IProductRepository extends CrudRepository<Product, Long> {

}
