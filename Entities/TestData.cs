using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace docReview.Entities
{
    public class TestData
    {
        public static async Task InitializeAsync(IServiceProvider services)
        {
            await AddTestDataAsync
            (
                services.GetRequiredService<DocReviewContext>()
            );
        }

        public static async Task AddTestDataAsync(DocReviewContext context)
        {
        }
    }
}