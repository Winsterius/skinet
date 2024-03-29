namespace Core.Entities.OrderAggregate;

public class Order : BaseEntity
{

    public Order()
    {
    }
    
    public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, Address shipAddress,
        DeliveryMethod deliveryMethod, decimal subtotal, string paymentIntendId)
    {
        BuyerEmail = buyerEmail;
        ShipAddress = shipAddress;
        DeliveryMethod = deliveryMethod;
        OrderItems = orderItems;
        Subtotal = subtotal;
        PaymentIntentId = paymentIntendId;

    }

    public string BuyerEmail { get; set; }

    public DateTime OrderDate { get; set; } = DateTime.UtcNow;

    public Address ShipAddress { get; set; }

    public DeliveryMethod DeliveryMethod { get; set; }

    public IReadOnlyList<OrderItem> OrderItems { get; set; }

    public decimal Subtotal { get; set; }

    public OrderStatus Status { get; set; } = OrderStatus.Pending;

    public string PaymentIntentId { get; set; }

    public decimal GetTotal()
    {
        return Subtotal + DeliveryMethod.Price;
    }

}