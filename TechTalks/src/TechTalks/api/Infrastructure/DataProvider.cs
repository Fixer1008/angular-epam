using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using TechTalks.api.Models;

namespace TechTalks.api.Infrastructure
{
  public class DataProvider : IDataProvider
  {
    private const string FilePath = "d:\\git\\angular-epam\\Data\\events.json";

    public IEnumerable<EventModel> GetEvents()
    {
      var items = ReadItems().ToArray();
      if (items.Length != 0)
      {
        return items;
      }

      GenerateData();
      return ReadItems();
    }

    public EventModel GetEvent(int id)
    {
      return ReadItems().SingleOrDefault(p => p.EventId == id);
    }

    public void DeleteEvent(int id)
    {
      SaveItems(ReadItems().ToList().Where(l => l.EventId != id).ToArray());

    }

    public void UpdateEvent(int id, EventModel model)
    {
      var items = ReadItems().ToArray();
      var item = items.SingleOrDefault(p => p.EventId == id);
      if (item != null)
      {
        item.Description = model.Description;
        item.EventName = model.EventName;
        item.Instructor = model.Instructor;
        item.PlannedTime = model.PlannedTime;
      }

      SaveItems(items);
    }

    public int CreateEvent(EventModel model)
    {
      var items = ReadItems().ToList();
      var max = items.Max(p => p.EventId) + 1;
      model.EventId = max;
      items.Add(model);
      SaveItems(items.ToArray());
      return max;
    }

    private IEnumerable<EventModel> ReadItems()
    {
      EventModel[] items = null;

      using (var file = File.OpenText(FilePath))
      {
        using (var reader = new JsonTextReader(file))
        {
          items = JsonSerializer.Create().Deserialize<EventModel[]>(reader);
        }
      }

      return items ?? Enumerable.Empty<EventModel>();
    }

    private void SaveItems(EventModel[] items)
    {
      using (var file = File.CreateText(FilePath))
      {
        using (var writer = new JsonTextWriter(file))
        {
          JsonSerializer.Create().Serialize(writer, items);
        }
      }
    }

    #region data generator
    public void GenerateData()
    {
      const int daysGap = 4;
      var instructors = new[]
      {
        "Heorhi Vilkitski", "Aliaksandr Koush", "Dzmitry Tabolich", "Valentine Zhuck ", "Sergey Tischenko"
      };

      var currentDate = DateTime.Now;
      var lst = new List<EventModel>();

      var rnd = new Random(DateTime.Now.Second);

      for (var i = 0; i < 10; i++)
      {
        lst.Add(new EventModel
        {
          Description = "Description #"+i,
          EventId = i,
          EventName = "Super Event #"+i,
          Instructor = instructors[rnd.Next(instructors.Length-1)],
          PlannedTime = currentDate
        });
        currentDate = currentDate.AddDays(daysGap);
      }

      SaveItems(lst.ToArray());
    }
    #endregion
  }
}