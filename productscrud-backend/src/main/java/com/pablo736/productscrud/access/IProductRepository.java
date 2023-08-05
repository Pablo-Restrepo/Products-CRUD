package com.pablo736.productscrud.access;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pablo736.productscrud.domain.entity.Product;

public interface IProductRepository extends JpaRepository<Product, Long> {
}
