import Home from '../views/home/home.jsx';
import RulesPage from '../views/rulespage/rules';
import NetworkUserPage from '../views/networkuserpage/networkuserpage';
import PolicyPage from '../views/policypage/policypage'
import NetworkObjectsPage from '../views/networkobjectspage/networkobjectspage';

// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Home', 
    icon: 'ti-home', 
    component: Home 
  },
  { 
    path: '/rules', 
    name: 'Rules', 
    icon: 'ti-ruler-alt',
    component: RulesPage,
  },
  { 
    path: '/users', 
    name: 'Users', 
    icon: 'ti-user',
    component: NetworkUserPage,
  },
  { 
    path: '/policy', 
    name: 'Policies', 
    icon: 'ti-list',
    component: PolicyPage,
  },
  { 
    path: '/netobjs', 
    name: 'Network Objects', 
    icon: 'ti-cloud',
    component: NetworkObjectsPage,
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
