// Pass the fractal environment, components
let localComponents = global.fractal.components.toJSON().items;

// Filter through the components to select only the vf-core-components object
function filterVfCoreComponents(item) {
  return item.handle == 'vf-core-components';
}

let vfCoreComponents = localComponents.find(filterVfCoreComponents);


// merge the vf-core components into the local components, so the display is simpler for users
localComponents = localComponents.concat(vfCoreComponents.items);

// now remove the "vf-core" components,
localComponents = localComponents.filter(obj => {
  return obj.handle != "vf-core-components"
})
localComponents = localComponents.filter(obj => {
  return obj.handle != "vf-core"
})

module.exports = {
  fractal: global.fractal,
  localComponents: localComponents,
  vfCoreComponents: vfCoreComponents.items
  // coreComponents: global.fractal.components.items()
};
