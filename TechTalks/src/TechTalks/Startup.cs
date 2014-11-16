using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using TechTalks.api.Infrastructure;

namespace TechTalks
{
  public class Startup
  {
    public void Configure(IApplicationBuilder app)
    {
      app.UseMvc();
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();
      services.AddSingleton<IDataProvider, DataProvider>();
    }
  }
}
