"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const framer_motion_1 = require("framer-motion");
exports.FadeIn = (props) => {
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, props.children));
};
exports.RightSidebar = (props) => {
    const style = Object.assign({ position: 'absolute', right: 0, top: 0, width: '350px', height: '100%' }, props.style || {});
    return (React.createElement(framer_motion_1.motion.div, { key: "right-sidebar", initial: { right: -350 }, animate: { right: 0 }, exit: { right: -350 }, style: style }, props.children));
};
const FirstPage = () => (React.createElement(exports.FadeIn, null, "this is the first page"));
const SecondPage = () => (React.createElement(exports.FadeIn, null, "this is the second page"));
const ThirdPage = () => (React.createElement("div", null, "this is the third page just inside a basic div"));
const RightSidebarPage = () => (React.createElement(exports.RightSidebar, { style: { backgroundColor: 'red' } },
    React.createElement("div", null, "this is the left sidebar")));
const ToggleVisibilityButton = (props) => (React.createElement("button", { onClick: () => props.onClick() }, "toggle visibility"));
const ToggleFade = (props) => {
    if (props.show) {
        return (React.createElement("div", null,
            React.createElement(ToggleVisibilityButton, { onClick: () => props.toggle() }),
            React.createElement(exports.FadeIn, null, "This should fade in and out on toggle")));
    }
    else {
        return (React.createElement("div", null,
            React.createElement(ToggleVisibilityButton, { onClick: () => props.toggle() })));
    }
};
const ToggleVisibility = () => {
    const [show, toggle] = react_1.useState(true);
    return (React.createElement(framer_motion_1.AnimatePresence, null,
        React.createElement(ToggleFade, { show: show, toggle: () => toggle(!show) })));
};
exports.App = () => (React.createElement(react_router_dom_1.HashRouter, { key: "browser-router", hashType: "noslash", basename: "/" },
    React.createElement("div", { style: { display: 'flex' } },
        React.createElement(react_router_dom_1.Link, { to: "/" }, "home"),
        "\u00A0",
        React.createElement(react_router_dom_1.Link, { to: "/second" }, "second"),
        "\u00A0",
        React.createElement(react_router_dom_1.Link, { to: "/third" }, "third"),
        "\u00A0",
        React.createElement(react_router_dom_1.Link, { to: "/toggler" }, "toggler"),
        "\u00A0",
        React.createElement(react_router_dom_1.Link, { to: "/sidebar" }, "sidebar")),
    React.createElement(react_router_dom_1.Route, { render: ({ location }) => (React.createElement(framer_motion_1.AnimatePresence, { exitBeforeEnter: true, initial: false },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: FirstPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/second', component: SecondPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/third', component: ThirdPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/toggler', component: ToggleVisibility }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/sidebar', component: RightSidebarPage })))) })));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsaUNBQStCO0FBQy9CLHVEQUFpRTtBQUVqRSxpREFBc0Q7QUFFekMsUUFBQSxNQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUVqQyxPQUFPLENBQ0gsb0JBQUMsc0JBQU0sQ0FBQyxHQUFHLElBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFFM0IsS0FBSyxDQUFDLFFBQVEsQ0FDTixDQUNoQixDQUFDO0FBRU4sQ0FBQyxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUV2QyxNQUFNLEtBQUssbUJBQ1AsUUFBUSxFQUFFLFVBQVUsRUFDcEIsS0FBSyxFQUFFLENBQUMsRUFDUixHQUFHLEVBQUUsQ0FBQyxFQUNOLEtBQUssRUFBRSxPQUFPLEVBQ2QsTUFBTSxFQUFFLE1BQU0sSUFDWCxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztJQUVGLE9BQU8sQ0FDSCxvQkFBQyxzQkFBTSxDQUFDLEdBQUcsSUFBQyxHQUFHLEVBQUMsZUFBZSxFQUNuQixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFDeEIsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNyQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFDckIsS0FBSyxFQUFFLEtBQUssSUFFbkIsS0FBSyxDQUFDLFFBQVEsQ0FDTixDQUNoQixDQUFDO0FBRU4sQ0FBQyxDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDcEIsb0JBQUMsY0FBTSxpQ0FFRSxDQUNaLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUNyQixvQkFBQyxjQUFNLGtDQUVFLENBQ1osQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ3BCLGtGQUVNLENBQ1QsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FFM0Isb0JBQUMsb0JBQVksSUFBQyxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFDO0lBQ3pDLDREQUVNLENBQ0ssQ0FFbEIsQ0FBQztBQU1GLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUNwRCxnQ0FBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBNEIsQ0FDckUsQ0FBQztBQVFGLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO0lBRTFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtRQUNaLE9BQU8sQ0FDSDtZQUNJLG9CQUFDLHNCQUFzQixJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUc7WUFDeEQsb0JBQUMsY0FBTSxnREFBK0MsQ0FDcEQsQ0FDVCxDQUFDO0tBQ0w7U0FBTTtRQUNILE9BQU8sQ0FDSDtZQUNJLG9CQUFDLHNCQUFzQixJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FDdEQsQ0FDVCxDQUFDO0tBQ0w7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtJQUUxQixNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHdEMsT0FBTyxDQUNILG9CQUFDLCtCQUFlO1FBQ1osb0JBQUMsVUFBVSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQ3pDLENBQ3JCLENBQUM7QUFFTixDQUFDLENBQUM7QUFPVyxRQUFBLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUVyQixvQkFBQyw2QkFBVSxJQUFDLEdBQUcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxHQUFHO0lBQzVELDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7UUFDekIsb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxXQUFZOztRQUV4QixvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxTQUFTLGFBQWM7O1FBRWhDLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLFFBQVEsWUFBYTs7UUFFOUIsb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUMsVUFBVSxjQUFlOztRQUVsQyxvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxVQUFVLGNBQWUsQ0FDaEM7SUFFTixvQkFBQyx3QkFBSyxJQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdCLG9CQUFDLCtCQUFlLElBQUMsZUFBZSxRQUFDLE9BQU8sRUFBRSxLQUFLO1lBRTNDLG9CQUFDLHlCQUFNO2dCQUVILG9CQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSTtnQkFDOUMsb0JBQUMsd0JBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUUsVUFBVSxHQUFJO2dCQUNyRCxvQkFBQyx3QkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUk7Z0JBQ25ELG9CQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixHQUFJO2dCQUM1RCxvQkFBQyx3QkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsR0FBSSxDQUV2RCxDQUNLLENBQ3JCLEdBQUcsQ0FFSyxDQUVoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtIYXNoUm91dGVyLCBMaW5rLCBSb3V0ZSwgU3dpdGNofSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQge0FuaW1hdGVQcmVzZW5jZSwgbW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEZhZGVJbiA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cblxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcblxufTtcblxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZWJhciA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgLi4ucHJvcHMuc3R5bGUgfHwge30sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IGtleT1cInJpZ2h0LXNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHJpZ2h0OiAtMzUwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdD17eyByaWdodDogLTM1MCB9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9PlxuXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuXG59O1xuXG5jb25zdCBGaXJzdFBhZ2UgPSAoKSA9PiAoXG4gICAgPEZhZGVJbj5cbiAgICAgICAgdGhpcyBpcyB0aGUgZmlyc3QgcGFnZVxuICAgIDwvRmFkZUluPlxuKTtcblxuY29uc3QgU2Vjb25kUGFnZSA9ICgpID0+IChcbiAgICA8RmFkZUluPlxuICAgICAgICB0aGlzIGlzIHRoZSBzZWNvbmQgcGFnZVxuICAgIDwvRmFkZUluPlxuKTtcblxuY29uc3QgVGhpcmRQYWdlID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIHRoaXMgaXMgdGhlIHRoaXJkIHBhZ2UganVzdCBpbnNpZGUgYSBiYXNpYyBkaXZcbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IFJpZ2h0U2lkZWJhclBhZ2UgPSAoKSA9PiAoXG5cbiAgICA8UmlnaHRTaWRlYmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgdGhpcyBpcyB0aGUgbGVmdCBzaWRlYmFyXG4gICAgICAgIDwvZGl2PlxuICAgIDwvUmlnaHRTaWRlYmFyPlxuXG4pO1xuXG5pbnRlcmZhY2UgVG9nZ2xlclByb3BzIHtcbiAgICByZWFkb25seSBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUb2dnbGVWaXNpYmlsaXR5QnV0dG9uID0gKHByb3BzOiBUb2dnbGVyUHJvcHMpID0+IChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2soKX0+dG9nZ2xlIHZpc2liaWxpdHk8L2J1dHRvbj5cbik7XG5cblxuaW50ZXJmYWNlIFRvZ2dsZUZhZGVQcm9wcyB7XG4gICAgcmVhZG9ubHkgc2hvdzogYm9vbGVhbjtcbiAgICByZWFkb25seSB0b2dnbGU6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRvZ2dsZUZhZGUgPSAocHJvcHM6IFRvZ2dsZUZhZGVQcm9wcykgPT4ge1xuXG4gICAgaWYgKHByb3BzLnNob3cpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZVZpc2liaWxpdHlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMudG9nZ2xlKCl9Lz5cbiAgICAgICAgICAgICAgICA8RmFkZUluPlRoaXMgc2hvdWxkIGZhZGUgaW4gYW5kIG91dCBvbiB0b2dnbGU8L0ZhZGVJbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUb2dnbGVWaXNpYmlsaXR5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnRvZ2dsZSgpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCBUb2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Nob3csIHRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxUb2dnbGVGYWRlIHNob3c9e3Nob3d9IHRvZ2dsZT17KCkgPT4gdG9nZ2xlKCEgc2hvdyl9Lz5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcblxufTtcblxuLy8gVGhpcyBkb2Vzbid0IHdvcmsgd2hlbiBhbmltYXRpbmcgdGhlIGV4aXQgYW5pbWF0aW9ucy4gIEhlcmUncyB3aGF0IEkndmUgdHJpZWQ6XG5cbi8vIC0gSSd2ZSBjb25maXJtZWQgdGhhdCBoYXZpbmcgYSBjb21wb25lbnQgd2hpY2ggaGFzIGEgYnV0dG9uIGFuZCB0b2dnbGVzIHRuZSBwcmVzZW50cyB3aXRoaW4gYW4gQW5pbWF0ZVByZXNlbmNlXG4vLyAgIGRvZXMgaW4gZmFjdCBwbGF5IHRoZSBleGl0IGFuaW1hdGlvbi5cblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IChcblxuICAgIDxIYXNoUm91dGVyIGtleT1cImJyb3dzZXItcm91dGVyXCIgaGFzaFR5cGU9XCJub3NsYXNoXCIgYmFzZW5hbWU9XCIvXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPmhvbWU8L0xpbms+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlY29uZFwiPnNlY29uZDwvTGluaz5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPExpbmsgdG89XCIvdGhpcmRcIj50aGlyZDwvTGluaz5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPExpbmsgdG89XCIvdG9nZ2xlclwiPnRvZ2dsZXI8L0xpbms+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZGViYXJcIj5zaWRlYmFyPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Um91dGUgcmVuZGVyPXsoeyBsb2NhdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG5cbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0ZpcnN0UGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zZWNvbmQnIGNvbXBvbmVudD17U2Vjb25kUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy90aGlyZCcgY29tcG9uZW50PXtUaGlyZFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvdG9nZ2xlcicgY29tcG9uZW50PXtUb2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL3NpZGViYXInIGNvbXBvbmVudD17UmlnaHRTaWRlYmFyUGFnZX0gLz5cblxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICl9Lz5cblxuICAgIDwvSGFzaFJvdXRlcj5cblxuKTtcbiJdfQ==