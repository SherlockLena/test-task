module.exports.illuminateActors = (n, m, actorsPositions) => { //7, 8, [[1, 1], [4, 2], [5, 3]]
    const projectors = {
        "right": [],
        "left": [],
        "down": [],
        "up": []
    };
    let projectorsCounter = 0;

    const checkByAxis = (dir1, dir2, axis, projCoords, actor, max) => { // axis here 0 - x, 1 - y
        for(let i = 1; i <= max; i++) {
            axis ? projCoords[1] = i : projCoords[0] = i;
            const posWithActor = actorsPositions.filter(subArr => subArr[0] === projCoords[0] && subArr[1] === projCoords[1]);
            if (posWithActor.length) {
                continue; //skip this position if it contains actor
            } else if (projCoords[axis] < actor[axis]) {
                if (projectors[dir1].filter(subArr => subArr[0] === projCoords[0] && subArr[1] === projCoords[1]).length) continue; //skip if we already have the same projector
                projectors[dir1].push([...projCoords]);
                projectorsCounter++;
            } else {
                if (projectors[dir2].filter(subArr => subArr[0] === projCoords[0] && subArr[1] === projCoords[1]).length) continue; //skip if we already have the same projector
                projectors[dir2].push([...projCoords]);
                projectorsCounter++;
            }
        }
    }

    for(let actor of actorsPositions){
        const projCoords = [];
        projCoords[1] = actor[1];
        checkByAxis("right", "left", 0, projCoords, actor, n);
        projCoords[0] = actor[0];
        checkByAxis("up", "down", 1, projCoords, actor, m);
    }
    return projectorsCounter;
}

