import styles from "../contribution/content_contribution.module.css"

const ContentArticalDetail = () => {
    return (
        <div>
            <h1 className={styles.title}> Submission's detail</h1>
            <div className={styles.table_submissionDetail}>
                <table className={styles.table_contribution_list}>
                    <tr className={`${styles.table_rows}`}>
                        <th className={styles.th_table_contribution}>Student's name</th>
                        <td></td>
                    </tr>
                    <tr className={styles.table_rows}>
                        <th className={styles.th_table_contribution}>Email</th>
                        <td></td>
                    </tr>
                    <tr className={styles.table_rows}>
                        <th className={styles.th_table_contribution}>Faculty</th>
                        <td></td>
                    </tr>
                    <tr className={styles.table_rows}>
                        <th className={styles.th_table_contribution}>Submission Date</th>
                        <td></td>
                    </tr>
                    <tr className={styles.table_rows}>
                        <th className={styles.th_table_contribution}>File submission</th>
                        <td>
                            <div className={styles.td_filesubmission}>
                                <span className={styles.file_name}>student_word.docx</span>
                                <button className={styles.btn_download}>Download</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default ContentArticalDetail