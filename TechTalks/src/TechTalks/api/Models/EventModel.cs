using System;

namespace TechTalks.api.Models
{
  public class EventModel
  {
    public int EventId { get; set; }

    public string EventName { get; set; }

    public DateTime PlannedTime { get; set; }

    public string Instructor { get; set; }

    public string Description { get; set; }
  }
}