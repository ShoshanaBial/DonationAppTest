using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace Donation.Utils
{
    public class DonationUtils
    {
        public void SendEmail()
        {
            var smtpClient = new SmtpClient(WebConfigurationManager.AppSettings["Host"])
            {
                //Host = "smtp.gmail.com",
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(WebConfigurationManager.AppSettings["UserName"], WebConfigurationManager.AppSettings["Password"]),


            };
            try { smtpClient.Send("ttestmail878@gmail.com", "ttestmail878@gmail.com", "מערכת תרומות", "שלום רב, לידיעתכם התקבלה תרומה מעל הסכום של 10000 שח "); }
            catch (Exception ex)
            {

            }
        }
    }
}
