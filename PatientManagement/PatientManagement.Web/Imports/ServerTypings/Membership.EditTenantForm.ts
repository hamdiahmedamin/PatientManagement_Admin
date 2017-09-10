﻿namespace PatientManagement.Membership {
    export class EditTenantForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditTenantRequest';

    }

    export interface EditTenantForm {
        Name: Serenity.StringEditor;
        TenantWebSite: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
    }

    [['Name', () => Serenity.StringEditor], ['TenantWebSite', () => Serenity.StringEditor], ['TenantImage', () => Serenity.ImageUploadEditor], ['WorkHoursStart', () => Serenity.TimeEditor], ['WorkHoursEnd', () => Serenity.TimeEditor], ['OverrideUsersEmailSignature', () => BsSwitchEditor], ['TenantEmailSignature', () => Serenity.HtmlContentEditor]].forEach(x => Object.defineProperty(EditTenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
