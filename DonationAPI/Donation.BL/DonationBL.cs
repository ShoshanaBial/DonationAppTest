using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Donation.DAL;
using Donation.Entities;
using Donation.Utils;

namespace Donation.BL
{
    public class DonationBL
    {
        DonationUtils utils = new DonationUtils();
        DonationDal dal = new DonationDal();

        public int SetDonation(DonationModel donation)
        {
            try
            {
                if (donation.Id == 0)// הכנסת תרומה חדשה
                {
                    if (donation.AmountNIS * donation.ExchangeRate > 10000) //שליחת מייל שהסכון גדןל מ10000
                        utils.SendEmail();
                    donation.CreatorName = Environment.UserName;//שמירת יוצר הרשומה
                    return dal.InsertDonation(donation);
                }
                else
                    return dal.UpdateDonation(donation);
            }
            catch (Exception ex)
            {
                throw ex;
            }




        }
    }
}
