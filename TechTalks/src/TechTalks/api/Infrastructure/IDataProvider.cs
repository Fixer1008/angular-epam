using System.Collections.Generic;
using TechTalks.api.Models;

namespace TechTalks.api.Infrastructure
{
  public interface IDataProvider
  {
    IEnumerable<EventModel> GetEvents();
    EventModel GetEvent(int id);
    void DeleteEvent(int id);
    void UpdateEvent(int id, EventModel model);
    int CreateEvent(EventModel model);
  }
}