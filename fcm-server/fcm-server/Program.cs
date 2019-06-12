using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FCM.Net;

namespace fcm_server
{
    class Program
    {
        static void Main(string[] args)
        {
            SendMsg().Wait();

        }

        public static async Task SendMsg()
        {
            var registrationId = "TOKEN";

            using (var sender = new Sender("SERVER KEY"))
            {
                var message = new Message
                {
                    RegistrationIds = new List<string> { registrationId },
                    Notification = new Notification
                    {
                        Title = "Push title",
                        Body = "Hello"
                    }
                };
                var result = await sender.SendAsync(message);
                Console.WriteLine($"Success: {result.MessageResponse.Success}");
            } 
        }
    }
}
