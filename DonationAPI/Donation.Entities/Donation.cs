using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Donation.Entities
{
    public class DonationModel
    {
        public int Id { get; set; }
        public string ForeignPoliticalEntityName { get; set; }

        public int AmountNIS { get; set; }
        public int ForeignPoliticalEntityTypeCode { get; set; }

        public string Destination { get; set; }

        public string Conditions { get; set; }
        public int CurrencyTypeCode { get; set; }
        public int ExchangeRate { get; set; }

        public string CreatorName { get; set; }
    }
}
