using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductControllers : ControllerBase
    {
        private readonly StoreContext context;

        public ProductControllers(StoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var products = context.Products.ToList();

            return Ok(products);
        }

        [HttpGet("{id}")] // api/products/x
        public ActionResult<Product>GetProducts(int id)
        {
            return context.Products.Find(id);
        }
    }
}