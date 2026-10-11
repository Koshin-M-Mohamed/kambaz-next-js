import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

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
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
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
          defaultValue="The assignment is available online Submit a link to the landing page of"
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
          defaultValue={100}
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
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 no-underline"
        >
          Cancel
        </Link>

        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
