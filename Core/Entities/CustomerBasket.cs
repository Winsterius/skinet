using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerBasket
    {
        public string Id { get; set; }
        public List<BasketItem> BasketItems { get; set; } = new List<BasketItem>();
    
        public CustomerBasket(string id)
        {
            Id = id;
        }
        public CustomerBasket() {}
    }
}