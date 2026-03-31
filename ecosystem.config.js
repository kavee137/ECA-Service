module.exports = {
  apps : [
      {
         name   : "user-service",
         script : "java -jar user-service/target/user-service-0.1.0-SNAPSHOT.jar",
          log_file: "./logs/user-service.log",
          instances: 2
      },
    {
      name   : "product-service",
      script : "java -jar product-service/target/product-service-0.1.0-SNAPSHOT.jar",
        log_file: "./logs/product-service.log",
        instances: 2
    },
    {
      name   : "order-service",
      script : "java -jar order-service/target/order-service-0.1.0-SNAPSHOT.jar",
        log_file: "./logs/order-service.log",
        instances: 2
    }
  ]
}
