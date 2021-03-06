﻿
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Subscriptions")]
    [BasedOnRow(typeof(Entities.SubscriptionsRow))]
    public class SubscriptionsForm
    {
        public String Name { get; set; }
        public Int32 OfferId { get; set; }
        public DateTime SubscriptionEndDate { get; set; }

        public int IsActive { get; set; }
    }
}