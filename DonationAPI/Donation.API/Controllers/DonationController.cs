using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Donation.BL;
using Donation.Entities;


namespace Donation.API.Controllers
{
    public class DonationController : ApiController
    {
        DonationBL donationBL = new DonationBL();
   
        [HttpPost]
        [Route("api/Donation")]
        public IHttpActionResult Post(DonationModel donation)
        {
            try
            {
                if (donation is null)
                {
                    throw new ArgumentNullException(nameof(donation));
                }
                int donationId = donationBL.SetDonation(donation);
                if (donationId > 0)
                    return Ok(donationId);
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

      
    }
}
