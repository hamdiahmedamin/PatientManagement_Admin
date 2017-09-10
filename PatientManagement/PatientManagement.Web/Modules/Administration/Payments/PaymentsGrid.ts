﻿
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    export class PaymentsGrid extends Serenity.EntityGrid<PaymentsRow, any> {
        protected getColumnsKey() { return 'Administration.Payments'; }

        protected getDialogType() { return PaymentsDialog; }

        protected getIdProperty() { return PaymentsRow.idProperty; }

        protected getLocalTextPrefix() { return PaymentsRow.localTextPrefix; }

        protected getService() { return PaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);


        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(1,
                0,
                {
                    field: 'Print Invoice',
                    name: 'Invoice',
                    format: ctx => '<a class="inline-action print-invoice" title="Invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i> PDF</a>',
                    width: 76,
                    minWidth: 54,
                    maxWidth: 76
                });

            return columns;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                hint: 'Export to Excel',
                title: 'Export to Excel',
                service: PaymentsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            return buttons;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    Common.ReportHelper.execute({
                        reportKey: 'Administration.PaymentInvoice',
                        params: {
                            PaymentId: item.PaymentId
                        }
                    });
                }
            }
        }
    }
}