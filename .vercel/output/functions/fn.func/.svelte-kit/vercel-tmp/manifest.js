export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f7e3079e.js","app":"_app/immutable/entry/app.43e630ca.js","imports":["_app/immutable/entry/start.f7e3079e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.3da0dbba.js","_app/immutable/entry/app.43e630ca.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
