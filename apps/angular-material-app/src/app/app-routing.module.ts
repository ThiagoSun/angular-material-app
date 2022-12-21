import {NgModule} from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';

export const ROUTER_CONFIG: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
};

const routerConfig: ExtraOptions = ROUTER_CONFIG;

const routes: Routes = [
    // Redirect empty path to 'dashboard' by default
    // always go first
    {path: '', pathMatch: 'full', redirectTo: 'home'},

    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        // component: FrameComponent,
        children: [
            {
                path: 'home',
                // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
                loadChildren: () => import('libs/home/src/lib/home.module').then((m) => m.HomeModule),
            },
        ],
    },
    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        // component: FrameComponent,
        children: [
            {
                path: 'onboarding',
                // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
                loadChildren: () => import('libs/onboarding/src/lib/onboarding.module').then((m) => m.OnboardingModule),
            },
        ],
    },
    {path: '**', redirectTo: '/dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerConfig)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}