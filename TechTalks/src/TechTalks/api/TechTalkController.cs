using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using TechTalks.api.Infrastructure;
using TechTalks.api.Models;

namespace TechTalks.api
{
  [Route("api/[controller]")]
  public class TechTalkController : Controller
  {
    private readonly IDataProvider _dataProvider;

    public TechTalkController(IDataProvider dataProvider)
    {
      _dataProvider = dataProvider;
    }

    [HttpGet]
    public IEnumerable<EventModel> Get()
    {
      return _dataProvider.GetEvents();
    }

    [HttpGet("{id}")]
    public EventModel Get(int id)
    {
      return _dataProvider.GetEvent(id);
    }

    [HttpPost]
    public void Post([FromBody]EventModel value)
    {
      _dataProvider.CreateEvent(value);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody]EventModel value)
    {
      _dataProvider.UpdateEvent(id,value);
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      _dataProvider.DeleteEvent(id);
    }
  }
}
