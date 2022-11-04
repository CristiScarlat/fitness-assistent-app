const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const { allExercises, filterData } = require('./db');
const workouts = require('./workouts.json');
const { filterList, writeToFile } = require('./utils');
const app = express();

const PORT = 5000;

app.use(cors('*'))

const jsonParser = bodyParser.json()

app.get('/exercises', (req, res) => {
    const reqObj = req.query;
    let list = [...allExercises];
    if (reqObj.bodyPart || reqObj.target || reqObj.equipment) {
        list = filterList(allExercises, {
            bodyPart: reqObj?.bodyPart || null,
            target: reqObj?.target || null,
            equipment: reqObj?.equipment || null
        })
    }
    const pageNo = Number(reqObj.pageNo);
    const pageQty = Number(reqObj.pageQty);
    res.statusCode = 200;
    if (pageNo !== undefined && pageQty !== undefined) {
        const paginatedList = list.slice(pageQty * pageNo, (pageQty * pageNo) + pageQty);
        res.json({ exercises: paginatedList, count: list.length });
        return
    }
    res.json({ exercises: list, count: list.length });
})

app.get('/workout-sessions', (req, res) => {
    res.statusCode = 200;
    res.json({ ...workouts });
});

app.post('/workout-sessions', jsonParser, (req, res) => {
    const reqObj = req.body;
    const originalContent = workouts;
    reqObj.id = Date.now();
    originalContent.workouts.push(reqObj)
    try {
        writeToFile(JSON.stringify(originalContent), '/workouts.json');
        res.statusCode = 201;
        res.json({ message: "Saved succesfuly." })
    }
    catch (error) {
        res.statusCode = 500;
        res.json({
            message: "Something went wrong, please try again later",
            error: error
        });
    }
});

app.get('/filter-terms', (req, res) => {
    const { category } = req.query;
    if (!category) {
        res.statusCode = 400;
        res.json({ error: 'Missing query parameter "category".' });
    }
    else if (category !== "bodyPart" && category !== "target" && category !== "equipment" && category !== "all") {
        res.statusCode = 400;
        res.json({ error: 'Bad category parameter value, only "bodyPart", "target" and "equipment" is allowed.' });
    }
    else {
        res.statusCode = 200;
        if (category === 'all') res.json(filterData);
        else res.json(filterData.find(obj => obj.key === category));
    }
})

app.get('/bodyPart', (req, res) => {
    const bodyParts = filterData[0].data;
    const arr = bodyParts.map(bp => {
        return allExercises.find(exercise => exercise.bodyPart === bp)
    })
    res.statusCode = 200;
    res.json(arr);
})

app.get('/target', (req, res) => {
    const targetMuscles = filterData[1].data;
    const arr = targetMuscles.map(tm => {
        return allExercises.find(exercise => exercise.target === tm)
    })
    res.statusCode = 200;
    res.json(arr);
})

app.get('/equipment', (req, res) => {
    const equipments = filterData[2].data;
    const arr = equipments.map(eq => {
        return allExercises.find(exercise => exercise.equipment === eq)
    })
    res.statusCode = 200;
    res.json(arr);
})

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.json({ status: "I'm alive" })
})

app.listen(PORT, () => {
    console.log("API is ready on port = " + PORT);
})
