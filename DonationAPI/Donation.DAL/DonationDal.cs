using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Donation.Entities;

namespace Donation.DAL
{
    public class DonationDal
    {
        public int InsertDonation(DonationModel newDonation)
        {
            /*הכנסת רשומה לDB*/
            /*והחזרת המזהה החדש שנוצר*/
            try
            {
                Random rnd = new Random();
                newDonation.Id = rnd.Next(100);
                return newDonation.Id;
            }
            catch (Exception ex)
            { throw ex; }

        }

        public int UpdateDonation(DonationModel updDonation)
        {
            /*שמירת עדכון לDB*/
            try
            {
                return updDonation.Id;
            }
            catch (Exception ex)
            { throw ex; }
        }
    }
}
