export const DashboardComponent = {
    bindings: {

    },
    templateUrl: './app/components/dashboard/dashboard.template.html',
    controller: class DashboardComponent {
        constructor() {
            'ngInject';
        }
        onSubmit() {
          alert('dupa')
        }
    }
};