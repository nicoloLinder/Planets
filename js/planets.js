importScripts("js/three.min.js");

function createMercury(){

    var mercury = new THREE.SphereGeometry(0.2,16,16);
    var mercuryMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/mercury/mercurymap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/mercury/mercurybump1k.jpg'),
        bumpScale       : 0.002
    });


    return new THREE.Mesh(mercury, mercuryMat);
}

function createVenus(){

    var venus = new THREE.SphereGeometry(.6,16,16);
    var venusMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/venus/venusmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/venus/venusbump1k.jpg'),
        bumpScale       : 0.006
    });


    return new THREE.Mesh(venus, venusMat);
}

function createEarth(){

    var earth = new THREE.SphereGeometry(.63,16,16);
    var earthMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/earth/earthmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/earth/earthbump1k.jpg'),
        bumpScale       : 0.06,
        specularMap     : new THREE.ImageUtils.loadTexture('images/earth/earthspec1k.jpg'),
        specular        : new THREE.Color('grey')
    });

    var cloud   = new THREE.SphereGeometry(.64, 16, 16);
    var cloudMat  = new THREE.MeshPhongMaterial({
        map         : THREE.ImageUtils.loadTexture('images/earth/earthcloudmap.jpg'),
        side        : THREE.DoubleSide,
        opacity     : 0.2,
        transparent : true,
        depthWrite  : false
    })

    var planetEarth = new THREE.Mesh(earth, earthMat);
    var cloudMesh = new THREE.Mesh(cloud, cloudMat);

    planetEarth.add(cloudMesh);

    return planetEarth;
}

function createMars(){

    var mars = new THREE.SphereGeometry(.33,16,16);
    var marsMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/mars/marsmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/mars/marsbump1k.jpg'),
        bumpScale       : 0.03
    });


    return new THREE.Mesh(mars, marsMat);
}

function createJupiter(){

    var jupiter = new THREE.SphereGeometry(6.9,16,16);
    var jupiterMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/jupiter/jupitermap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/jupiter/jupiterbump1k.jpg'),
        bumpScale       : 0.3
    });


    return new THREE.Mesh(jupiter, jupiterMat);

}

function createSaturn(){

    var satrun = new THREE.SphereGeometry(5.8,16,16);
    var saturnMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/saturn/saturnmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/saturn/saturnbump1k.jpg'),
        bumpScale       : 0.3
    });
    var ring = new THREE.CircleGeometry(12, 16 );
    var ringMat = new THREE.MeshLambertMaterial({
        map             : new THREE.ImageUtils.loadTexture('images/saturn/saturnrings1k.png'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/saturn/saturnringsbump1k.jpg'),
        bumpScale       : 0.1,
        transparent     : true,
        side            : THREE.DoubleSide
    });

    var saturnRings = new THREE.Mesh(ring, ringMat);

    saturnRings.rotation.x = 1.8;
    saturnRings.rotation.z = 1.8;

    var planetSaturn = new THREE.Mesh(satrun, saturnMat);

    planetSaturn.add(saturnRings);

    return planetSaturn;

}

function createUranus(){

    var uranus = new THREE.SphereGeometry(2.5,16,16);
    var uranusMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/uranus/uranusmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/uranus/uranusbump1k.jpg'),
        bumpScale       : 0.1
    });
    var ring = new THREE.CircleGeometry(6, 16 );
    var ringMat = new THREE.MeshLambertMaterial({
        map             : new THREE.ImageUtils.loadTexture('images/uranus/uranusrings1k.png'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/uranus/uranusrings1k.png'),
        bumpScale       : 0.2,
        transparent : true,
        side        : THREE.DoubleSide
    });

    var uranusRings = new THREE.Mesh(ring, ringMat);

    uranusRings.rotation.x = -2.9;
//        uranusRings.rotation.z = 1.8;

    var planetUranus = new THREE.Mesh(uranus, uranusMat);

    planetUranus.add(uranusRings);

    return planetUranus;

}

function createNeptune(){

    var neptune = new THREE.SphereGeometry(2.4,16,16);
    var neptuneMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/neptune/neptunemap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/neptune/neptunebump1k.jpg'),
        bumpScale       : 0.2
    });


    return new THREE.Mesh(neptune, neptuneMat);

}

function createPluto(){

    var pluto = new THREE.SphereGeometry(0.1,16,16);
    var plutoMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/pluto/plutomap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/pluto/plutobump1k.jpg'),
        bumpScale       : 0.005
    });


    return new THREE.Mesh(pluto, plutoMat);

}

function createMoon() {

    var moon = new THREE.SphereGeometry(0.17, 16, 16);
    var moonMat = new THREE.MeshPhongMaterial({
        shininess       : 5,
        map             : new THREE.ImageUtils.loadTexture('images/moon/moonmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/moon/moonbump1k.jpg'),
        bumpScale       : 0.001
    });


    return new THREE.Mesh(moon, moonMat);
}

function createSun() {

    var sun = new THREE.SphereGeometry(69, 16, 16);
    var sunMat = new THREE.MeshPhongMaterial({
        shininess       : 5,
        map             : new THREE.ImageUtils.loadTexture('images/sun/sunmap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/sun/sunmap1k.jpg'),
        bumpScale       : 0.5,
        emissive        : 0xffa500
    });



    var planetSun = new THREE.Mesh(sun, sunMat);


    return planetSun;

}

function createMarsWater(){

    var mars = new THREE.SphereGeometry(.33,16,16);
    var marsMat = new THREE.MeshPhongMaterial({
        shininess: 5,
        map             : new THREE.ImageUtils.loadTexture('images/mars/marswatermap1k.jpg'),
        bumpMap         : new THREE.ImageUtils.loadTexture('images/mars/marsbump1k.jpg'),
        bumpScale       : 0.03
    });


    return new THREE.Mesh(mars, marsMat);
}