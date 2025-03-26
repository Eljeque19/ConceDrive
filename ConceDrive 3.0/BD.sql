create database TEST
go
use TEST 
go

create table clientes (
    cliente_id int identity (1,1) PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(15),
    direccion VARCHAR(255),
    fecha_registro datetime default getdate() null);


CREATE TABLE vehiculos (
  id_vehiculo int identity (1,1) PRIMARY KEY,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  año INT NOT NULL,
  precio decimal(10, 2) NOT NULL,
  color varchar(50),
  tipo_vehiculo varchar(50),
  descripcion text,
  fecha_ingreso datetime default getdate() null
);

CREATE TABLE ventas (
  id int identity (1,1) PRIMARY KEY,
  id_cliente INT,
  id_vehiculo INT,
  fecha_venta datetime default getdate(),
  precio DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES clientes (cliente_id),
  FOREIGN KEY (id_vehiculo) REFERENCES vehiculos(id_vehiculo)
);

CREATE TABLE empleados (
  id int identity (1,1) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  cargo VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(15),
  fecha_ingreso datetime default getdate()
);

CREATE TABLE categoria (
  id_categoria int identity (1,1) PRIMARY KEY,
  nombre_categoria VARCHAR(50) NOT NULL
);

CREATE TABLE categoria_vehiculos (
  id_vehiculo int,
  id_categoria int,
  PRIMARY KEY (id_vehiculo, id_categoria),
  FOREIGN KEY (id_vehiculo) REFERENCES vehiculos(id_vehiculo),
  FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
);


create table admin (
id int identity(1,1) primary key,
usuario varchar(10),
clave varchar(15));
