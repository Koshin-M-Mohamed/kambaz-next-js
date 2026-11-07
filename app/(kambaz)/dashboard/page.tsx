"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore(
    (state) => state.updateCourse
  );
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const visibleCourses = currentUser
    ? showAllCourses
      ? courses
      : courses.filter((c) =>
        enrollments.some(
          (enrollment) =>
            enrollment.user === currentUser._id && enrollment.course === c._id
        )
      )
    : courses;
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-enrollments-toggle"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      </div>
      <hr />
      <button
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-add-new-course-click"
        onClick={() => addCourse(course)}
      >
        Add
      </button>
      <button
        type="button"
        className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
        id="wd-update-course-click"
        onClick={() => updateCourse(course)}
      >
        Update
      </button>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-my-own-course-number"
      />
      <input
        type="date"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-my-own-course-start-date"
      />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => {
          const isEnrolled = currentUser
            ? enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id && enrollment.course === c._id
              )
            : false;

          return (
            <CourseCard
              key={c._id}
              course={c}
              onEdit={() => setCourse(c)}
              currentUserId={currentUser?._id ?? null}
              isEnrolled={isEnrolled}
            />
          );
        })}
      </div>
    </div>
  );
}
