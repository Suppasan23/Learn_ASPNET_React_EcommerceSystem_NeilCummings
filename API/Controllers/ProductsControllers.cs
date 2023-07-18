using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;


namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductControllers : ControllerBase
    {
        private readonly StoreContext _context;

        public ProductControllers(StoreContext context)
        {
            this._context = context;
        }

        [HttpGet] //get all product
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")] //get specific product
        public async Task<ActionResult<Product>>GetProducts(int id)
        {
            return await _context.Products.FindAsync(id);
        }
    }
}