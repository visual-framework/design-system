// Pass the fractal environment, components
let localComponents = global.fractal.components.toJSON().items;

// Filter through the components to select only the vf-core-components object
function filterVfCoreComponents(item) {
  return item.handle == 'vf-core-components';
}

let vfCoreComponents = localComponents.find(filterVfCoreComponents)
// console.log(vfCoreComponents)

module.exports = {
  fractal: global.fractal,
  localComponents: localComponents,
  vfCoreComponents: vfCoreComponents.items
  // coreComponents: global.fractal.components.items()
};
