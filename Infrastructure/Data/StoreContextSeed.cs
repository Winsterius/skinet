using System.Reflection;
using System.Text.Json;
using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Infrastructure.Data;

public static class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext context)
    {
        var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
        
        if (!context.ProductBrands.Any())
        {
            var brandsData = await File.ReadAllTextAsync(path + @"/Data/SeedData/brands.json");
            var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
            context.ProductBrands.AddRange(brands);
        }
        
        if (!context.ProductTypes.Any())
        {
            var typesData = await File.ReadAllTextAsync(path + @"/Data/SeedData/types.json");
            var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
            context.ProductTypes.AddRange(types);
        }
        
        if (!context.Products.Any())
        {
            var productData = await File.ReadAllTextAsync(path + @"/Data/SeedData/products.json");
            var products = JsonSerializer.Deserialize<List<Product>>(productData);
            context.Products.AddRange(products);
        }
        
        if (!context.DeliveryMethods.Any())
        {
            var deliveryData = await File.ReadAllTextAsync(path + @"/Data/SeedData/delivery.json");
            var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
            context.DeliveryMethods.AddRange(methods);
        }

        if (context.ChangeTracker.HasChanges()) await context.SaveChangesAsync();
    }
}