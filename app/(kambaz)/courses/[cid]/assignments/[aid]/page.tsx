"use client";

import { useState } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const assignmentId = typeof aid === "string" ? aid : "";

  return (
    <AssignmentForm
      key={`${courseId}/${assignmentId}`}
      courseId={courseId}
      assignmentId={assignmentId}
    />
  );
}

function AssignmentForm({
  courseId,
  assignmentId,
}: {
  courseId: string;
  assignmentId: string;
}) {
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const isNew = assignmentId === "new";
  const existingAssignment = assignments.find(
    (a) => a._id === assignmentId && a.course === courseId
  );
  const [assignment, setAssignment] = useState<Assignment & { until?: string }>(
    existingAssignment ?? {
      _id: "new",
      title: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      due: "",
      available: "",
      until: "",
      course: courseId,
    }
  );

  if (!isNew && !existingAssignment) notFound();

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="mx-auto max-w-3xl">
      <div className="mb-5">
        <label
          htmlFor="wd-name"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Assignment Name
        </label>

        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
        <p className="mt-1 text-sm text-neutral-600">Assignment id: {assignmentId}</p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-description"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Description
        </label>

        <textarea
          id="wd-description"
          className="min-h-[160px] w-full rounded border border-neutral-300 px-3 py-2"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-points"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Points
        </label>

        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-group"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Assignment Group
        </label>

        <select
          id="wd-group"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-display-grade-as"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Display Grade as
        </label>

        <select
          id="wd-display-grade-as"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="Letter Grade">Letter Grade</option>
          <option value="Points">Points</option>
        </select>
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-submission-type"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Submission Type
        </label>

        <select
          id="wd-submission-type"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>
      </div>

      <div className="mb-5 rounded border border-neutral-300 p-4">
        <h3 className="mb-3 font-semibold">Online Entry Options</h3>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-assign-to"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Assign to
        </label>

        <input
          id="wd-assign-to"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-due-date"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Due
        </label>

        <input
          type="date"
          id="wd-due-date"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-available-from"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Available from
        </label>

        <input
          type="date"
          id="wd-available-from"
          value={assignment.available}
          onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="wd-available-until"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Until
        </label>

        <input
          type="date"
          id="wd-available-until"
          value={assignment.until ?? ""}
          onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Sample notes
        </label>

        <textarea
          id="wd-ai-editor-notes"
          className="min-h-[160px] w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="flex justify-end gap-2 border-t border-neutral-200 pt-4">
        <button
          id="wd-cancel"
          type="button"
          onClick={() => router.push(`/courses/${courseId}/assignments`)}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 no-underline"
        >
          Cancel
        </button>

        <button
          id="wd-save"
          type="button"
          onClick={save}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </button>
      </div>
    </div>
  );
}
