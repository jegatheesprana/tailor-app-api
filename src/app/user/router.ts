import {Router, Request, Response} from 'express'
import User from './model';
import { Appointment } from '../../models/appointment.model'
import jwt, { Secret, JwtPayload, SignOptions, DecodeOptions } from 'jsonwebtoken'
import { hash, compare, genSalt } from 'bcrypt';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    User.find().then(users => {
        res.status(200).json(users);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.post('/signup', async (req: Request, res: Response)=> {
    const email = req.body.email; // Required.. can't be undefined
	const password = req.body.password;
	const name = req.body.name;
	const shopName = req.body.shopName;

    // Hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

	const newUser = new User({
		email,
		password: hashedPassword,
		name,
		shopName,
	});

	newUser
		.save()
		.then(() => {
			res.json("User added");
			// console.log(`${newDoctor} added!`)
		})
		.catch((err) => {
			res.status(400).json(`Error : ${err}`);
			// console.log(err);
		});
})

router.post("/login", async (req: Request, res: Response) => {
	try {
		const email = req.body.email;
		const plainTextPassword = req.body.password;

		const user = await User.findOne({
			email,
		});

        console.log(user)

		if (user === null || !(await compare(plainTextPassword, user.password))) {
			return res.status(201).json({ message: "wrong email or password" });
		}

		// Doctor found, return the token to the client side
		const token = jwt.sign(
			JSON.stringify(user),
			process.env.KEY as Secret, 
			{
				algorithm: process.env.ALGORITHM as string,
			} as SignOptions
		);

		return res.status(200).json({ token: token.toString(), user: {...user?.toJSON(), type: 'user'} });

	} catch (err) {
		console.log(err);
		return res.status(400).json(err);
	}
});


// To update a user's phone number
router.put('/update-phone', (req: Request, res: Response) => {
    const userId = req.body.userId;

    User.findOne({ _id: userId }).then(user => {
        if (user) {
            user.shopName = req.body.shopName;

            user.save().then(() => {
                res.status(200).json('User\'s phone number updated');
            }).catch(err => {
                res.status(400).json({ message: `Error : ${err}` });
            });
        }
    })
})

router.get('/getUserDetails/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const user = await User.findOne({ _id: userId });

        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(201).json({ message: "User not found!" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
})

router.post('/previous-appointments', async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const appointments = await Appointment.find({ userId: userId });

        // Get current dateTime
        const date = new Date()
        let currDateTime = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        currDateTime += month < 10 ? ('-0' + month.toString()) : '-' + month.toString()
        currDateTime += day < 10 ? ('-0' + day.toString()) : '-' + day.toString()
        currDateTime += hour < 10 ? ('T0' + hour.toString()) : 'T' + hour.toString()
        currDateTime += minutes < 10 ? (':0' + minutes.toString()) : ':' + minutes.toString()
        currDateTime += seconds < 10 ? (':0' + seconds.toString()) : ':' + seconds.toString()

        const filteredAppointments = appointments.filter((appointment) => {
            return Date.parse(currDateTime) >= (Date.parse(appointment.date + 'T' + appointment.slotTime)+30*600000)
        })

        const sortedAppointments = filteredAppointments.sort((a, b) => {
            return Date.parse(b.date + 'T' + b.slotTime) - Date.parse(a.date + 'T' + a.slotTime)
        })

        res.status(200).json(sortedAppointments);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.post('/upcoming-appointments', async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const appointments = await Appointment.find({ userId: userId });

        // Get current dateTime
        const date = new Date()
        let currDateTime = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        currDateTime += month < 10 ? ('-0' + month.toString()) : '-' + month.toString()
        currDateTime += day < 10 ? ('-0' + day.toString()) : '-' + day.toString()
        currDateTime += hour < 10 ? ('T0' + hour.toString()) : 'T' + hour.toString()
        currDateTime += minutes < 10 ? (':0' + minutes.toString()) : ':' + minutes.toString()
        currDateTime += seconds < 10 ? (':0' + seconds.toString()) : ':' + seconds.toString()

        const filteredAppointments = appointments.filter((appointment) => {
            return Date.parse(currDateTime) <= (Date.parse(appointment.date + 'T' + appointment.slotTime)+30*60000)
        })

        const sortedAppointments = filteredAppointments.sort((a, b) => {
            return Date.parse(a.date + 'T' + a.slotTime) - Date.parse(b.date + 'T' + b.slotTime)
        })

        res.status(200).json(sortedAppointments);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})


export default router;