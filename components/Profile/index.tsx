import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
const Profile = () => {
  return (
    <Card>
      <CardHeader className="profile-grid bg-secondary rounded-md">
        <div>
          <CardTitle>$Profile Name, $Age</CardTitle>
          <CardDescription>$Username - $555ft - $000lb </CardDescription>
        </div>
        <Button size="xs">Edit</Button>
      </CardHeader>
      <CardContent className=" grid gap-3">
        <p>Goal Weight: $lb</p>
        <hr />
        <p>Daily Calory Intake: 1200 </p>
        <hr />
        <div className="profile-grid">
          <div>
            <p>Days Workout: 56</p>
            <hr />
          </div>
          <Button variant="outline" size="xs">
            {" "}
            Explore
          </Button>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Badge variant="secondary">Workouts: $0</Badge>
        <Badge variant="secondary">Workouts: $0</Badge>
        <Badge variant="secondary">Workouts: $0</Badge>
      </CardFooter> */}
    </Card>
  );
};

export default Profile;
