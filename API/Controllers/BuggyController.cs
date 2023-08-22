using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    private readonly StoreContext _context;

    public BuggyController(StoreContext context)
    {
        _context = context;
    }
    
    [HttpGet("not-found")]
    public ActionResult GetNotFoundRequest()
    {
        var thing = _context.Products.Find(-1);

        if (thing == null) return NotFound(new ApiResponse(404));
        
        return Ok();
    }
    
    [HttpGet("server-error")]
    public ActionResult GetServerErrorRequest()
    {
        
        var thing = _context.Products.Find(-1);

        var thingToReturn = thing.ToString();
        
        return Ok();
    }
    
    [HttpGet("bad-request")]
    public ActionResult GetBadRequestRequest()
    {
        return BadRequest(new ApiResponse(400));
    }
    
    [HttpGet("bad-request/{id}")]
    public ActionResult GetRequest(int id)
    {
        return Ok();
    }
}