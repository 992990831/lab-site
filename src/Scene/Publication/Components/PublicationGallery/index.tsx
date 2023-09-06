import * as React from 'react';
import './style.css';
import Footer from '../../../HomePage/Components/Footer';
import { StaticImage } from 'gatsby-plugin-image'

// const publicationData: any[] = [{
//     name: '实验室最新成果',
//     address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230705/1688525171375756.png'
// }, {
//     name: '实验室最新成果',
//     address: ' 169 Warren St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230618/1687093135162401.png'
// }, {
//     name: '实验室最新成果',
//     address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230626/1687791555578576.jpg'
// }];

const getPublicationList = () => {
    return (
        <>
        {/* Section 1 */}
        <div className='singlePublication' data-year='0'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className='full'>
                    <div>
                        <h4>Structural fingerprinting of the frontal aslant tract: predicting cognitive control capacity and obsessive-compulsive symptoms
                        </h4>
                    </div>
                    <div>
                        <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Neuroscience </em>(In Press)</p></div><div>
                        <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Danni Wang, Qing Fan, Xiang Xiao, Hongjian He, Yihong Yang*, Yao Li*</strong>
                        </p>
                    </div>
                    <div>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* Section 2 */}
        <div className='singlePublication' data-year='2023'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-2.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Prediction of Stroke Onset Time with Combined Fast High-Resolution Magnetic Resonance Spectroscopic and Quantitative T2 Mapping
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>IEEE Transactions on Biomedical Engineering</em> on 2023 May</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Ziyu Meng, Rong Guo, Tianyao Wang, Bin Bo, Zengping Lin, Yudu Li, Yibo Zhao, Xin Yu, David J Lin, Parashkev Nachev, Zhi-Pei Liang, Yao Li*</strong>
                            </p></div><div><p style={{ whiteSpace: "pre-wrap" }}>
                                <p>Objective: The purpose of this work is to develop a multispectral imaging approach that combines fast high-resolution 3D magnetic resonance spectroscopic imaging (MRSI) and fast quantitative T2 mapping to capture the multifactorial biochemical changes within stroke lesions and evaluate its potentials for stroke onset time prediction. </p>
                                <p>
                            Methods:
                            Special imaging sequences combining fast trajectories and sparse sampling were used to obtain whole-brain maps of both neurometabolites (2.0×3.0×3.0 mm3) and quantitative T2 values (1.9×1.9×3.0 mm3) within a 9-minute scan. Participants with ischemic stroke at hyperacute (0–24h, n = 23) or acute (24h–7d, n = 33) phase were recruited in this study. Lesion N-acetylaspartate (NAA), lactate, choline, creatine, and T2 signals were compared between groups and correlated with patient symptomatic duration. Bayesian regression analyses were employed to compare the predictive models of symptomatic duration using multispectral signals. 
                            </p>
                            <p>
                            Results: 
                            In both groups, increased T2 and lactate levels, as well as decreased NAA and choline levels were detected within the lesion (all p &lt; 0.001). Changes in T2, NAA, choline, and creatine signals were correlated with symptomatic duration for all patients (all p&lt;0.005). Predictive models of stroke onset time combining signals from MRSI and T2 mapping achieved the best performance (hyperacute: R2 = 0.438; all: R2 = 0.548). 
                            </p>
                            Conclusion: 
                            The proposed multispectral imaging approach provides a combination of biomarkers that index early pathological changes after stroke in a clinical-feasible time and improves the assessment of the duration of cerebral infarction. 
                            <p>
                            Significance: 
                            Developing accurate and efficient neuroimaging techniques to provide sensitive biomarkers for prediction of stroke onset time is of great importance for maximizing the proportion of patients eligible for therapeutic intervention. The proposed method provides a clinically feasible tool for the assessment of symptom onset time post ischemic stroke, which will help guide time-sensitive clinical management.
                            </p>
                            </p>
                            </div>
                            
                        <a href="https://ieeexplore.ieee.org/abstract/document/10128980?casa_token=Y1l4NZGRDRYAAAAA:hrkrOEboXQkyn5yPbXu2glb8SlEqJtyxkh_DcJfHPseLoIS_0z7qCnaR_I0C2FdggyehWGRGAzs" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
        </div>

{/* Section 3 */}
        <div className='singlePublication' data-year='2023'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-3.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>B1 mapping using pre-learned subspaces for quantitative brain imaging
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> on 2023 June</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Tianxiao Zhang, Yibo Zhao, Wen Jin, Yudu Li, Rong Guo, Ziwen Ke, Jie Luo, Yao Li* and Zhi-Pei Liang</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>Purpose:
                            To develop a machine learning-based method for estimation of both transmitter and receiver B1 fields desired for correction of the B1 inhomogeneity effects in quantitative brain imaging.
                            </p>
                            <p>
                            Theory and Methods:
                            A subspace model-based machine learning method was proposed for estimation of B1t and B1r fields. Probabilistic subspace models were used to capture scan-dependent variations in the B1 fields; the subspace basis and coefficient distributions were learned from pre-scanned training data. Estimation of the B1 fields for new experimental data was achieved by solving a linear optimization problem with prior distribution constraints. We evaluated the performance of the proposed method for B1 inhomogeneity correction in quantitative brain imaging scenarios, including T1 and proton density (PD) mapping from variable-flip-angle spoiled gradient-echo (SPGR) data as well as neurometabolic mapping from MRSI data, using phantom, healthy subject and brain tumor patient data.
                            </p>
                            <p>
                            Results:
                            In both phantom and healthy subject data, the proposed method produced high-quality B1 maps. B1 correction on SPGR data using the estimated B1 maps produced significantly improved T1 and PD maps. In brain tumor patients, the proposed method produced more accurate and robust B1 estimation and correction results than conventional methods. The B1 maps were also applied to MRSI data from tumor patients and produced improved neurometabolite maps, with better separation between pathological and normal tissues.
                            </p>
                            <p>
                            Conclusion:
                            This work presents a novel method to estimate B1 variations using probabilistic subspace models and machine learning. The proposed method may make correction of B1 inhomogeneity effects more robust in practical applications.
                            </p>
                            </p>
                        </div>
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.29764" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 4 */}
            <div className='singlePublication' data-year='2023'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-4.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Predicting the Onset of Ischemic Stroke With Fast High-Resolution 3D MR Spectroscopic Imaging
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Magnetic Resonance Imaging.</em> on 2023 Jan</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Lin Z, Meng Z, Wang T, Guo R, Zhao Y, Li Y, Bo B, Guan Y, Liu J, Zhou H, Yu X, Lin D, Liang ZP, Nachev P, and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>Background:
                            Neurometabolite concentrations provide a direct index of infarction progression in stroke. However, their relationship with stroke onset time remains unclear. 
                            </p>
                            <p>
                            Purpose:
                            To assess the temporal dynamics of N-acetylaspartate (NAA), creatine, choline, and lactate and estimate their value in predicting early (&lt;6 hours) vs. late (6–24 hours) hyperacute stroke groups.
                            </p>
                            <p>
                            Study Type:
                            Cross-sectional cohort. 
                            </p>
                            <p>
                            Population:
                            A total of 73 ischemic stroke patients scanned at 1.8–302.5 hours after symptom onset, including 25 patients with follow-up scans.
                            </p>
                            <p>
                            Field Strength/Sequence:
                            A 3 T/magnetization-prepared rapid acquisition gradient echo sequence for anatomical imaging, diffusion-weighted imaging and fluid-attenuated inversion recovery imaging for lesion delineation, and 3D MR spectroscopic imaging (MRSI) for neurometabolic mapping.
                            </p>
                            <p>
                            Assessment:
                            Patients were divided into hyperacute (0–24 hours), acute (24 hours to 1 week), and subacute (1–2 weeks) groups, and into early (&lt;6 hours) and late (6–24 hours) hyperacute groups. Bayesian logistic regression was used to compare classification performance between early and late hyperacute groups by using different combinations of neurometabolites as inputs.
                            </p>
                            <p>
                            Statistical Tests:
                            Linear mixed effects modeling was applied for group-wise comparisons between NAA, creatine, choline, and lactate. Pearson's correlation analysis was used for neurometabolites vs. time. P &lt; 0.05 was considered statistically significant.
                            </p>
                            <p>
                            Results:
                            Lesional NAA and creatine were significantly lower in subacute than in acute stroke. The main effects of time were shown on NAA (F = 14.321) and creatine (F = 12.261). NAA was significantly lower in late than early hyperacute patients, and was inversely related to time from symptom onset across both groups (r = −0.440). The decrease of NAA and increase of lactate were correlated with lesion volume (NAA: r = −0.472; lactate: r = 0.366) in hyperacute stroke. Discrimination was improved by combining NAA, creatine, and choline signals (area under the curve [AUC] = 0.90).
                            </p>
                            <p>
                            Data Conclusion:
                            High-resolution 3D MRSI effectively assessed the neurometabolite changes and discriminated early and late hyperacute stroke lesions.
                            </p>
                            </p>
                        </div>
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/jmri.28596" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 5 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-5-1.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>T2’ mapping of the brain from water-unsuppressed 1H-MRSI and turbo spin-echo data
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> on 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang T, Guo R, Li Y, Zhao Y, Li Y*, Liang Z</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>Purpose:
                            To obtain high-quality T2' maps of brain tissues from water-unsuppressed magnetic resonance spectroscopic imaging (MRSI) and turbo spin-echo (TSE) data.
                            </p>
                            <p>
                            Methods:
                            T2' mapping can be achieved using T2* mapping from water-unsuppressed MRSI data and T2 mapping from TSE data. However, T2* mapping often suffers from signal dephasing and distortions caused by B0 field inhomogeneity; T2 measurements may be biased due to system imperfections, especially for T2-weighted image with small number of TEs. In this work, we corrected the B0 field inhomogeneity effect on T2* mapping using a subspace model-based method, incorporating pre-learned spectral basis functions of the water signals. T2 estimation bias was corrected using a TE-adjustment method, which modeled the deviation between measured and reference T2 decays as TE shifts.
                            </p>
                            <p>
                            Results:
                            In vivo experiments were performed to evaluate the performance of the proposed method. High-quality T2* maps were obtained in the presence of large field inhomogeneity in the prefrontal cortex. Bias in T2 measurements obtained from TSE data was effectively reduced. Based on the T2* and T2 measurements produced by the proposed method, high-quality T2' maps were obtained, along with neurometabolite maps, from MRSI and TSE data that were acquired in about 9 min. The results obtained from acute stroke and glioma patients demonstrated the feasibility of the proposed method in the clinical setting.
                            </p>
                            <p>
                            Conclusions:
                            High-quality T2' maps can be obtained from water-unsuppressed 1H-MRSI and TSE data using the proposed method. With further development, this method may lay a foundation for simultaneously imaging oxygenation and neurometabolic alterations of brain disorders.
                            </p>
                            </p>
                        </div>
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.29386" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 6 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-6.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Simultaneous mapping of water diffusion coefficients and metabolite distributions of the brain using MR spectroscopic imaging without water suppression
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>IEEE Transactions on Biomedical Engineering</em>in 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Guo R, Li Y, Zhao Y, Wang T, Li Y, Brad S, and Liang ZP</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>Objective: To simultaneously map water diffusion coefficients and metabolite distributions of the brain in magnetic resonance spectroscopic imaging (MRSI) experiments within a clinically feasible time.</p>
                            <p>Methods: A diffusion-preparation module was introduced in water-unsuppressed MRSI acquisition sequence to generate diffusion weighting of the water signals. Fast spatiospectral encodings were achieved using echo-planar spectroscopic imaging readouts with blipped phase encodings for sparse sampling. Navigator signals were embedded in the data acquisition sequence, which were used for detection of data corrupted by physiological motion in the diffusion preparation period. In data processing, a novel model-based method was developed to effectively use sparse (k, t)-space spectroscopic signals for reconstruction of the spatial distributions of water diffusion coefficients and metabolite concentrations. </p>
                            <p>Results: Both phantom experiments and in vivo experiments were carried out to evaluate the feasibility and performance of the proposed method. In an 8-minute scan, diffusion weighted images and apparent diffusion coefficients map at 2.0×1.0×1.0 mm 3 were obtained simultaneously with metabolite maps at 2.0×3.0×3.0 mm 3 nominal resolution. Conclusion: We demonstrated the feasibility of using the unsuppressed water signals from MRSI experiments to map the water diffusion coefficients of brain tissues and proposed a novel method to achieve simultaneous mapping of water diffusion coefficients and metabolite distributions.</p>
                            <p>Significance: The proposed method provides a unique imaging tool for simultaneous diffusion and metabolic imaging. This method is expected to be useful for various brain imaging applications.</p>
                            </p>
                        </div>
                        <a href="https://ieeexplore.ieee.org/abstract/document/9891828" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 7 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-7.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Disrupted coupling between salience network segregation and glucose metabolism is associated with cognitive decline in Alzheimer's disease - A simultaneous resting-state FDG-PET/fMRI study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>NeuroImage: Clinical</em> in 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang M, Guan Z, Zhang Y, Sun W, Li W, Hu J, Li B, Ye G, Meng H, Huang X, Lin X, Wang J, Liu J, Li B, Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            The aberrant organization and functioning of three core neurocognitive networks (NCNs), i.e., default-mode network (DMN), central executive network (CEN), and salience network (SN), are among the prominent features in Alzheimer’s disease (AD). The dysregulation of both intra- and inter-network functional connectivities (FCs) of the three NCNs contributed to AD-related cognitive and behavioral abnormalities. Brain functional network segregation, integrating intra- and inter-network FCs, is essential for maintaining the energetic efficiency of brain metabolism. The association of brain functional network segregation, together with glucose metabolism, with age-related cognitive decline was recently shown. Yet how these joint functional-metabolic biomarkers relate to cognitive decline along with mild cognitive impairment (MCI) and AD remains to be elucidated. In this study, under the framework of the triple-network model, we performed a hybrid FDG-PET/fMRI study to evaluate the concurrent changes of resting-state brain intrinsic FCs and glucose metabolism of the three NCNs across cognitively normal (CN) (N = 24), MCI (N = 21), and AD (N = 21) groups. Lower network segregation and glucose metabolism were observed in all three NCNs in patients with AD. More interestingly, in the SN, the coupled relationship between network segregation and glucose metabolism existed in the CN group (r = 0.523, p = 0.013) and diminished in patients with MCI (r = 0.431, p = 0.065) and AD (r = 0.079, p = 0.748). Finally, the glucose metabolism of the DMN (r = 0.380, p = 0.017) and the network segregation of the SN (r = 0.363, p = 0.023) were significantly correlated with the general cognitive status of the patients. Our findings suggest that the impaired SN segregation and its uncoupled relationship with glucose metabolism contribute to the cognitive decline in AD.
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/pii/S2213158222000420" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 8 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-8.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Neurometabolic and functional changes of default-mode network relate to clinical recovery in first-episode psychosis patients: A longitudinal 1H-MRS and fMRI study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>NeuroImage: Clinical</em> in 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Li W, Xu J, Xiang Q, Zhuo K, Zhang Y, Liu D, Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p> Background
                            Antipsychotic treatment has improved the disrupted functional connectivity (FC) and neurometabolites levels of the default mode network (DMN) in schizophrenia patients, but a direct relationship between FC change, neurometabolic level alteration, and symptom improvement has not been built. This study examined the association between the alterations in DMN FC, the changes of neurometabolites levels in the medial prefrontal cortex (MPFC), and the improvements in psychopathology in a longitudinal study of drug-naïve first-episode psychosis (FEP) patients.
                            </p>
                            <p>
                            Methods
                            Thirty-two drug-naïve FEP patients and 30 matched healthy controls underwent repeated assessments with the Positive and Negative Syndrome Scale (PANSS) and 3T proton magnetic resonance spectroscopy as well as resting-state functional magnetic resonance imaging. The levels of γ-aminobutyric acid, glutamate, N-acetyl-aspartate in MPFC, and the FC of DMN were measured. After 8-week antipsychotic treatment, 24 patients were re-examined.
                            </p>
                            <p>
                            Results
                            After treatment, the changes in γ-aminobutyric acid were correlated with the alterations of FC between the MPFC and DMN, while the changes in N-acetyl-aspartate were associated with the alterations of FC between the posterior cingulate cortex/precuneus and DMN. The FC changes of both regions were correlated with patients PANSS positive score reductions. The structural equation modeling analyses revealed that the changes of DMN FC mediated the relationship between the changes of neurometabolites and the symptom improvements of the patients.
                            </p><p>
                            Conclusions
                            The derived neurometabolic-functional changes underlying the clinical recovery provide insights into the prognosis of FEP patients. It is noteworthy that this is an exploratory study, and future work with larger sample size is needed to validate our findings.
                            </p>
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/pii/S2213158222000353" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>


            {/* Section 9 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-9.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Endogenous Neural Stem Cell–induced Neurogenesis after Ischemic Stroke: Processes for Brain Repair and Perspectives
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Transl. Stroke Res.</em> in 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Tang H, Li Y*, Tang, W. et al</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Ischemic stroke is a very common cerebrovascular accident that occurred in adults and causes higher risk of neural deficits. After ischemic stroke, patients are often left with severe neurological deficits. Therapeutic strategies for ischemic stroke might mitigate neuronal loss due to delayed neural cell death in the penumbra or seek to replace dead neural cells in the ischemic core. Currently, stem cell therapy is the most promising approach for inducing neurogenesis for neural repair after ischemic stroke. Stem cell treatments include transplantation of exogenous stem cells but also stimulating endogenous neural stem cells (NSCs) proliferation and differentiation into neural cells. In this review, we will discuss endogenous NSCs-induced neurogenesis after ischemic stroke and provide perspectives for the therapeutic effects of endogenous NSCs in ischemic stroke. Our review would inform future therapeutic development not only for patients with ischemic stroke but also with other neurological deficits.
                            </p>
                        </div>
                        <a href="https://link.springer.com/article/10.1007/s12975-022-01078-5" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 10 */}
            <div className='singlePublication' data-year='2022'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-10.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Longitudinal alterations of modular functional-metabolic coupling in first-episode schizophrenia
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Psychiatric Research</em> in 2022</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang S, Li W, Xiang Q, Kuai X, Zhuo K, Wang J, Xu Y, Li Y and Liu D</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Altered network organization and aberrant neurometabolic levels have been associated with schizophrenia. However, modular alterations of functional-neurometabolic coupling in various stages of schizophrenia remain unclear. This longitudinal study enrolled 34 drug-naïve first-episode schizophrenia (FES) patients and 30 healthy controls (HC). The FES patients underwent resting-state functional magnetic resonance imaging (rs-fMRI) and proton magnetic resonance spectroscopy (1H-MRS) at baseline, 2 months, and 6 months of treatment. For 1H-MRS, the concentrations of γ-aminobutyric acid (GABA), N-acetylaspartate (NAA) and glutamate + glutamine in the ventromedial prefrontal cortex region were measured. A graph theoretical approach was applied for functional connectivity-based modular parcellation. We found that intra-default mode network (DMN) connectivity, inter-modular connectivity between the DMN and the hippocampus, and inter-modular connectivity between the DMN and the frontoparietal module were significantly different across 6-month treatment in the FES patients. The inter-module connectivity of the DMN and hippocampus correlated positively with NAA concentration in the HC group, while this correlation was absent in FES patients. This exploratory study suggests an altered modular connectivity in association with neurometabolite concentrations in FES patients and provides insights into multimodal neuroimaging biomarkers in schizophrenia. Future studies with larger sample sizes are needed to consolidate our findings.
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0022395622006197" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>

                </div>
            </div>
            </div>

            {/* Section 11 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className='full'>
                    <div>
                        <h4>Arcuate fasciculus subsegment impairments distinctly associated with memory and language deficits in acute mild traumatic brain injury patients
                        </h4>
                    </div>
                    <div>
                        <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Neurotrauma </em>in 2021</p></div><div>
                        <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Wang T, Hu Y, Wang D, Liu J, Sun J, Wei C, Dai H, Li Y*</strong>
                        </p>
                    </div>
                    <div>
                        <p style={{ whiteSpace: "pre-wrap" }}>
                        In acute mild traumatic brain injury (mTBI), the injury-related axonal swelling leads to white matter fiber bundle impairments, closely related to the memory and language deficits commonly shown in the patients. The arcuate fasciculus (AF) plays a central role in verbal learning and language function but could be functionally heterogeneous along the fiber tract. In this study, 25 patients with acute mTBI (&lt;48 h after trauma) and 33 age- and sex-matched healthy controls (HCs) were included. Impaired verbal memory and language functions were shown in the patient group compared with the HCs. Combined diffusion tensor imaging (DTI) and functional magnetic resonance imaging (fMRI) were applied to investigate the altered diffusion measure profiles of the AF tracts and the associated functional features. The fractional anisotropy (FA) in the right AF temporal subsegment of the mTBI group was negatively associated with the patient verbal memory function, whereas a positive correlation was found in the HC group. On the other hand, the correlation between the FA in the right AF frontal subsegment and the language function in HCs diminished in the patient group. Moreover, the functional connectivity between the inferior frontal gyrus and the middle occipital gyrus decreased, and its correlation with language function in HCs was absent in the patients with mTBI. Our work provides new insights into the understanding of the structural and functional heterogeneity of the AF tracts as well as the distinct associations of its subsegment impairments with verbal memory and language function deficits in patients with acute mTBI.
                        </p>
                    </div>
                    <a href="https://europepmc.org/article/MED/34605664" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                </div>
            </div>
            </div>

            {/* Section 12 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-12.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Imaging acute stroke: from one size fits all to biomarkers
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>NeuroImage: Clinical</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Lu J, Mei Q, Hou X, Manaenko A, Zhou L, Liebeskind D, Zhang J, Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            In acute stroke management, time window has been rigidly used as a guide for decades and the reperfusion treatment is only available in the first few limited hours. Recently, imaging-based selection of patients has successfully expanded the treatment window out to 16 and even 24 h in the DEFUSE 3 and DAWN trials, respectively. Recent guidelines recommend the use of imaging techniques to guide therapeutic decision-making and expanded eligibility in acute ischemic stroke. A tissue window is proposed to replace the time window and serve as the surrogate marker for potentially salvageable tissue. This article reviews the evolution of time window, addresses the advantage of a tissue window in precision medicine for ischemic stroke, and discusses both the established and emerging techniques of neuroimaging and their roles in defining a tissue window. We also emphasize the metabolic imaging and molecular imaging of brain pathophysiology, and highlight its potential in patient selection and treatment response prediction in ischemic stroke.
                            </p>
                        </div>
                        <a href="https://www.frontiersin.org/articles/10.3389/fneur.2021.697779/full" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 13 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-13.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Disrupted functional connectivity of precuneus subregions in obsessive-compulsive disorder
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>NeuroImage: Clinical</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Ye Q, Zhang Z, Sun W, Fan Q, and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Obsessive-compulsive disorder (OCD) is a chronic and disabling psychiatric disorder with high lifetime prevalence, yet the underlying pathogenesis remains not fully understood. Increasing neuroimaging evidence has shown that the disrupted activity of brain functional hubs might contribute to the pathophysiology of OCD. Precuneus is an important brain hub which showed structural and functional abnormalities in OCD patients. However, the functional heterogeneity of the precuneus subregion has not been considered and its relation to OCD symptomatology remains to be elucidated. In this paper, a total of 73 unmedicated OCD patients and 79 matched healthy subjects were recruited and the heterogeneous functional connectivities (FCs) of the precuneus subregions were investigated using resting-state functional magnetic resonance imaging. The FC-based subdivision of the precuneus was performed using the K-means clustering algorithm, which led to a tripartite functional parcellation of precuneus. For each subregion, the distinct connectivity pattern with the whole brain was shown, using both voxel-wise and module-wise analysis, respectively. Decreased FC between dorsal posterior precuneus and vermis (corrected p&lt;0.01) was shown in the patient group, which was negatively correlated with patient compulsions score, indicating its contribution to the compulsive behavior inhibition of OCD. Our work might provide new insights into the understanding of precuneus subregion function and the importance of dorsal precuneus-cerebellum functional connectivity in OCD pathophysiology.
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/pii/S2213158221001649" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 14 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-14.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Simultaneous PET/fMRI Detects Distinctive Alterations in Functional Connectivity and Glucose Metabolism of Precuneus Subregions in Alzheimer’s Disease
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Front. Aging Neurosci.</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang M, Sun W, Guan Z, H J, Li B, Ye G, Meng H, Huang X, Lin X, Wang J, Liu J, Li B*, Zhang Y*, and Li Y</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            As a central hub in the interconnected brain network, the precuneus has been reported showing disrupted functional connectivity and hypometabolism in Alzheimer's disease (AD). However, as a highly heterogeneous cortical structure, little is known whether individual subregion of the precuneus is uniformly or differentially involved in the progression of AD. To this end, using a hybrid PET/fMRI technique, we compared resting-state functional connectivity strength (FCS) and glucose metabolism in dorsal anterior (DA_pcu), dorsal posterior (DP_pcu) and ventral (V_pcu) subregions of the precuneus among 20 AD patients, 23 mild cognitive impairment (MCI) patients, and 27 matched cognitively normal (CN) subjects. The sub-parcellation of precuneus was performed using a K-means clustering algorithm based on its intra-regional functional connectivity. For the whole precuneus, decreased FCS (p = 0.047) and glucose hypometabolism (p = 0.006) were observed in AD patients compared to CN subjects. For the subregions of the precuneus, decreased FCS was found in DP_pcu of AD patients compared to MCI patients (p = 0.011) and in V_pcu for both MCI (p = 0.006) and AD (p = 0.008) patients compared to CN subjects. Reduced glucose metabolism was found in DP_pcu of AD patients compared to CN subjects (p = 0.038) and in V_pcu of AD patients compared to both MCI patients (p = 0.045) and CN subjects (p &lt; 0.001). For both FCS and glucose metabolism, DA_pcu remained relatively unaffected by AD. Moreover, only in V_pcu, disruptions in FCS (r = 0.498, p = 0.042) and hypometabolism (r = 0.566, p = 0.018) were significantly correlated with the cognitive decline of AD patients. Our results demonstrated a distinctively disrupted functional and metabolic pattern from ventral to dorsal precuneus affected by AD, with V_pcu and DA_pcu being the most vulnerable and conservative subregion, respectively. Findings of this study extend our knowledge on the differential roles of precuneus subregions in AD.
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/34630070/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 15 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-15.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Improved estimation of myelin water fractions with learned parameter distributions
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Li Y, Xiong J, Guo R, Zhao Y, Li Y, Liang Z</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>Purpose
                            To improve estimation of myelin water fraction (MWF) in the brain from multi-echo gradient-echo imaging data.
                            </p>
                            <p>
                            Methods
                            A systematic sensitivity analysis was first conducted to characterize the conventional exponential models used for MWF estimation. A new estimation method was then proposed for improved estimation of MWF from practical gradient-echo imaging data. The proposed method uses an extended signal model that includes a finite impulse response filter to compensate for practical signal variations. This new model also enables the use of prelearned parameter distributions as well as low-rank signal structures to improve parameter estimation. The resulting parameter estimation problem was solved optimally in the Bayesian sense.
                            </p>
                            <p>
                            Results
                            Our sensitivity analysis results showed that the conventional exponential models were very sensitive to measurement noise and modeling errors. Our simulation and experimental results showed that our proposed method provided a substantial improvement in reliability, reproducibility, and robustness of MWF estimates over the conventional methods. Clinical results obtained from stroke patients indicated that the proposed method, with its improved capability, could reveal the loss of myelin in lesions, demonstrating its translational potentials.
                            </p>
                            <p>
                            Conclusion
                            This paper addressed the problem of robust MWF estimation from gradient-echo imaging data. A new method was proposed to provide improved MWF estimation in the presence of significant noise and modeling errors. The performance of the proposed method has been evaluated using both simulated and experimental data, showing significantly improved robustness over the existing methods. The proposed method may prove useful for quantitative myelin imaging in clinical applications.
                            </p>
                            </p>
                        </div>
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.28889" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>


            {/* Section 16 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-16.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Middle temporal corpus callosumimpairment as a predictor of eight-week treatment outcome of drug-naïve first-episode psychosis patients: A pilot longitudinal study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Schizophrenia Research 232: 95-97</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Wang D, Zhuo K, Sun Y, Xiang Q, Guo X, Wang J, Xu Y, Liu D*, Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/34029947/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 17 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-17.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Diffusion property and functional connectivity of superior longitudinal fasciculus underpin human metacognition
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Neuropsychologia</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zheng Y, Wang D, Ye Q, Zou F, Li Y, Kwok S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Metacognition as the capacity of monitoring one's own cognition operates across domains. Here, we addressed whether metacognition in different cognitive domains rely on common or distinct neural substrates with combined diffusion tensor imaging (DTI) and functional magnetic resonance imaging (fMRI) techniques. After acquiring DTI and resting-state fMRI data, we asked participants to perform a temporal-order memory task and a perceptual discrimination task, followed by trial-specific confidence judgments. DTI analysis revealed that the structural integrity (indexed by fractional anisotropy) in the anterior portion of right superior longitudinal fasciculus (SLF) was associated with both perceptual and mnemonic metacognitive abilities. Using perturbed mnemonic metacognitive scores produced by inhibiting the precuneus using TMS, the mnemonic metacognition scores did not correlate with individuals' SLF structural integrity anymore, revealing the relevance of this tract in memory metacognition. To further verify the involvement of several cortical regions connected by SLF, we took the TMS-targeted precuneus region as a seed in a functional connectivity analysis and found the functional connectivity between precuneus and two SLF-connected regions (inferior parietal cortex and precentral gyrus) mediated mnemonic metacognition performance. These results illustrate the importance of SLF and a putative white-matter grey-matter circuitry that supports human metacognition.
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33812946/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 18 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-18.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Accelerating T2 mapping of the brain by integrating deep learning priors with low‐rank and sparse modeling
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Meng Z, Guo R, Li Y, Guan Y, Wang T, Zhao Y, Sutton B, Li Y and Liang Z-P</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            <p>
                            Purpose
                            To accelerate T2 mapping with highly sparse sampling by integrating deep learning image priors with low-rank and sparse modeling.
                            </p>
                            <p>
                            Methods
                            The proposed method achieves high-speed T2 mapping by highly sparsely sampling (k, TE)-space. Image reconstruction from the undersampled data was done by exploiting the low-rank structure and sparsity in the T2-weighted image sequence and image priors learned from training data. The image priors for a single TE were generated from the public Human Connectome Project data using a tissue-based deep learning method; the image priors were then transferred to other TEs using a generalized series-based method. With these image priors, the proposed reconstruction method used a low-rank model and a sparse model to capture subject-dependent novel features.
                            </p>
                            <p>
                            Results
                            The proposed method was evaluated using experimental data obtained from both healthy subjects and tumor patients using a turbo spin-echo sequence. High-quality T2 maps at the resolution of 0.9 × 0.9 × 3.0 mm3 were obtained successfully from highly undersampled data with an acceleration factor of 8. Compared with the existing compressed sensing–based methods, the proposed method produced significantly reduced reconstruction errors. Compared with the deep learning–based methods, the proposed method recovered novel features better.
                            </p>
                            <p>
                            Conclusion
                            This paper demonstrates the feasibility of learning T2-weighted image priors for multiple TEs using tissue-based deep learning and generalized series-based learning. A new method was proposed to effectively integrate these image priors with low-rank and sparse modeling to reconstruct high-quality images from highly undersampled data. The proposed method will supplement other acquisition-based methods to achieve high-speed T2 mapping.
                            </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33812946/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 19 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-19.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Simultaneous QSM and metabolic imaging of the brain using SPICE: Further improvements in data acquisition and processing
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Guo R, Zhao Y, Li Y, Wang T, Li Y, Brad S, and Liang ZP</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Purpose: To achieve high-resolution mapping of brain tissue susceptibility in simultaneous QSM and metabolic imaging.
                                </p>
                                <p>
                                Methods: Simultaneous QSM and metabolic imaging was first achieved using SPICE (spectroscopic imaging by exploiting spatiospectral correlation), but the QSM maps thus obtained were at relatively low-resolution (2.0 × 3.0 × 3.0 mm3 ). We overcome this limitation using an improved SPICE data acquisition method with the following novel features: 1) sampling (k, t)-space in dual densities, 2) sampling central k-space fully to achieve nominal spatial resolution of 3.0 × 3.0 × 3.0 mm3 for metabolic imaging, and 3) sampling outer k-space sparsely to achieve spatial resolution of 1.0 × 1.0 × 1.9 mm3 for QSM. To keep the scan time short, we acquired spatiospectral encodings in echo-planar spectroscopic imaging trajectories in central k-space but in CAIPIRINHA (controlled aliasing in parallel imaging results in higher acceleration) trajectories in outer k-space using blipped phase encodings. For data processing and image reconstruction, a union-of-subspaces model was used, effectively incorporating sensitivity encoding, spatial priors, and spectral priors of individual molecules.
                                </p>
                                <p>
                                Results: In vivo experiments were carried out to evaluate the feasibility and potential of the proposed method. In a 6-min scan, QSM maps at 1.0 × 1.0 × 1.9 mm3 resolution and metabolic maps at 3.0 × 3.0 × 3.0 mm3 nominal resolution were obtained simultaneously. Compared with the original method, the QSM maps obtained using the new method reveal fine-scale brain structures more clearly.
                                </p>
                                <p>
                                Conclusion: We demonstrated the feasibility of achieving high-resolution QSM simultaneously with metabolic imaging using a modified SPICE acquisition method. The improved capability of SPICE may further enhance its practical utility in brain mapping.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/32810319/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 20 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-20.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Decreased microstructural integrity of the central somatosensory tracts in diabetic peripheral neuropathy
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>The Journal of Clinical Endocrinology & Metabolism</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Fang F, Luo Q, Ge R, Lai M, Gong Y, Kang M, Ma M, Zhang L, Li Y, Wang Y, and Peng Y</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Context: Although diabetic peripheral neuropathy (DPN) is predominantly considered a disorder of the peripheral nerves, some evidence for central nervous system involvement has recently emerged. However, whether or to what extent the microstructure of central somatosensory tracts may be injured remains unknown.
                                </p>
                                <p>
                                Objective: This work aimed to detect the microstructure of central somatosensory tracts in type 2 diabetic patients and to correlate it with the severity of DPN.
                                </p>
                                <p>
                                Methods: A case-control study at a tertiary referral hospital took place with 57 individuals with type 2 diabetes (25 with DPN, 32 without DPN) and 33 nondiabetic controls. The fractional anisotropy (FA) values of 2 major somatosensory tracts (the spinothalamic tract and its thalamocortical [spino-thalamo-cortical, STC] pathway, the medial lemniscus and its thalamocortical [medial lemnisco-thalamo-cortical, MLTC] pathway) were assessed based on diffusion tensor tractography. Regression models were further applied to detect the association of FA values with the severity of DPN in diabetic patients.
                                </p>
                                <p>
                                Results: The mean FA values of left STC and left MLTC pathways were significantly lower in patients with DPN than those without DPN and controls. Moreover, FA values of left STC and left MLTC pathways were significantly associated with the severity of DPN (expressed as Toronto Clinical Scoring System values) in patients after adjusting for multiple confounders.
                                </p>
                                <p>
                                Conclusion: Our findings demonstrated the axonal degeneration of central somatosensory tracts in type 2 diabetic patients with DPN. The parallel disease progression of the intracranial and extracranial somatosensory system merits further attention to the central nerves in diabetic patients with DPN.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33711158/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 21 */}
            <div className='singlePublication' data-year='2021'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-21.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>18F-florbetapir PET/MRI for quantitatively monitoring myelin loss and recovery in patients with multiple sclerosis: A longitudinal study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>EClinicalMedicine</em> in 2021</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang M, Ni Y, Zhou Q, He L, Meng H, Gao Y, Huang X, Meng H, Li P, Chen M, Wang D, Hu J, Huang Q, Li Y, Chauveau, Li B, Chen S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background:
                                Amyloid positron emission tomography (PET) can measure in-vivo demyelination in patients with multiple sclerosis (MS). However, the value of 18F-labeled amyloid PET tracer, 18F-florbetapir in the longitudinal study for monitoring myelin loss and recovery has not been confirmed.
                                </p>
                                <p>
                                Methods:
                                From March 2019 to September 2020, twenty-three patients with MS and nine healthy controls (HCs) underwent a hybrid PET/MRI at baseline and expanded disability status scale (EDSS) assessment, and eight of 23 patients further underwent follow-up PET/MRI. The distribution volume ratio (DVR) and standard uptake value ratio (SUVR) of 18F-florbetapir in damaged white matter (DWM) and normal-appearance white matter (NAWM) were obtained from dynamic and static PET acquisition. Diffusion tensor imaging-derived parameters were also calculated. Data were expressed as mean ± standard deviation with 99% confidence interval (99%CI).
                                </p>
                            </p>
                        </div>
                        <a href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(21)00262-5/fulltext" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 22 */}
            <div className='singlePublication' data-year='2020'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-22.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Fast high-resolution metabolic imaging of acute stroke with 3D magnetic resonance spectroscopy
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Brain (Cover Feature Article)</em> in 2020/11</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Li Y*, Wang T, Zhang T, Lin Z, Li Y, Guo R, Zhao Y, Meng Z, Liu J, Yu X, Liang Z-P and Nachev P</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                Impaired oxygen and cellular metabolism is a hallmark of ischaemic injury in acute stroke. Magnetic resonance spectroscopic imaging (MRSI) has long been recognized as a potentially powerful tool for non-invasive metabolic imaging. Nonetheless, long acquisition time, poor spatial resolution, and narrow coverage have limited its clinical application. Here we investigated the feasibility and potential clinical utility of rapid, high spatial resolution, near whole-brain 3D metabolic imaging based on a novel MRSI technology. In an 8-min scan, we simultaneously obtained 3D maps of N-acetylaspartate and lactate at a nominal spatial resolution of 2.0 × 3.0 × 3.0 mm3 with near whole-brain coverage from a cohort of 18 patients with acute ischaemic stroke. Serial structural and perfusion MRI was used to define detailed spatial maps of tissue-level outcomes against which high-resolution metabolic changes were evaluated. Within hypoperfused tissue, the lactate signal was higher in areas that ultimately infarcted compared with those that recovered (P &lt; 0.0001). Both lactate (P &lt; 0.0001) and N-acetylaspartate (P &lt; 0.001) differed between infarcted and other regions. Within the areas of diffusion-weighted abnormality, lactate was lower where recovery was observed compared with elsewhere (P &lt; 0.001). This feasibility study supports further investigation of fast high-resolution MRSI in acute stroke.
                            </p>
                        </div>
                        <a href="https://academic.oup.com/brain/article/143/11/3225/5952715" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 23 */}
            <div className='singlePublication' data-year='2020'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-23.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Optogenetic translocation of protons out of penumbral neurons is protective in a rodent model of focal cerebral ischemia
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Brain Stimulation</em> in 2020</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Bo B, Li Y*, Li W, Wang Y, and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background
                                Intracellular acidosis in the ischemic penumbra can contribute to further cell death, effectively enlarging the infarct core. Restoring the acid-base balance may enhance tissue survivability after cerebral ischemia.
                                </p>
                                <p>
                                Objective
                                This study investigated whether translocating protons out of penumbral neurons could mitigate tissue acidification and induce neuroprotection in a rodent model of acute cerebral ischemia.
                                </p>
                                <p>
                                Methods
                                We modulated the penumbral neurons via a light-driven pump to translocate protons out (i.e., archaerhodopsin/ArchT group) or into (i.e., channelrhodopsin-2/ChR2 group) neurons after focal cerebral ischemia in rats. Intracellular pH values were imaged via neutral red (NR) fluorescence and cerebral blood flow (CBF) was monitored through laser speckle contrast imaging (LSCI). Global CBF responses to electrical stimulation of the hindlimbs were obtained 24 h and 48 h after ischemia to assess neurological function. Behavioral and histological outcomes were evaluated 48 h after ischemia. A control group without gene modification was included.
                                </p>
                                <p>
                                Results
                                The reduction of relative pH (RpH), the amplitude of negative peak of hypoemic response (RNP) and the hemispheric lateralization index (LI) in ArchT group were significantly less than those of the ChR2 or control group. Moreover, RpH was strongly correlated with RNP (r = 0.60) and LI (r24h = 0.80, r48h = 0.59). In addition, behavioral and histological results supported a neuroprotective effect of countering neuronal acidosis in penumbra through optogenetic stimulation.
                                </p>
                                <p>
                                Conclusion(s)
                                These results indicate that countering intracellular acidosis by optogenetically translocating protons out of penumbral neurons during the acute ischemic stage could induce protection after ischemic brain injury.
                                </p>
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/pii/S1935861X20300619" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>


            {/* Section 24 */}
            <div className='singlePublication' data-year='2020'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-24.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Neurochemical and brain functional changes in the ventromedial prefrontal cortex of first-episode psychosis patients: A combined functional magnetic resonance imaging - proton magnetic resonance spectroscopy study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Australian & New Zealand Journal of Psychiatry</em> in 2020</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Cen H, Xu J, Yang Z, Mei L, Chen T, Zhuo K, Xiang Q, Song Z, Wang Y, Guo X, Wang J, Jiang K, Xu Y, Li Y*, and Liu D</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Objective:
                                Previous studies showed alterations of brain function in the ventromedial prefrontal cortex of schizophrenia patients. Also, neurochemical changes, especially GABA level alteration, have been found in the medial prefrontal cortex of schizophrenia patients. However, the relationship between GABA level in the ventromedial prefrontal cortex and brain functional activity in schizophrenia patients remains unexplored.
                                </p>
                                <p>
                                Methods:
                                In total, 23 drug-naïve, first-episode psychosis patients and 26 matched healthy controls completed the study. The single voxel proton magnetic resonance spectroscopy data were acquired in ventromedial prefrontal cortex region, which was used as the seed region for resting-state functional connectivity analysis. The proton magnetic resonance spectroscopy data were processed to quantify the concentrations of GABA+, glutamine and glutamate, and N-acetylaspartate in ventromedial prefrontal cortex. Spearman correlation analysis was used to examine the relationship between metabolite concentration, functional connectivity and clinical variables. Pearson correlation analysis was used to examine the relationship between GABA+ concentration and functional connectivity value.
                                </p>
                                <p>
                                Results:
                                In first-episode psychosis patients, GABA+ level in ventromedial prefrontal cortex was higher and was positively correlated with ventromedial prefrontal cortex-left middle orbital frontal cortex functional connectivity. N-acetylaspartate level was positively correlated with positive symptoms, and the functional connectivity between ventromedial prefrontal cortex and left precuneus was negatively associated with negative symptoms of first-episode psychosis patients.
                                </p>
                                <p>
                                Conclusion:
                                Our results indicated that ventromedial prefrontal cortex functional connectivity changes were positively correlated with higher local GABA+ level in first-episode psychosis patients. The altered neurochemical concentration and functional connectivity provide insights into the pathology of schizophrenia.
                                </p>
                            </p>
                        </div>
                        <a href="https://journals.sagepub.com/doi/10.1177/0004867419898520" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 25 */}
            <div className='singlePublication' data-year='2019'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-25.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Simultaneous metabolic and functional imaging of the brain using SPICE
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Magnetic Resonance in Medicine</em> in 2019</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Guo R, Zhao Y, Li Y, Li Y, and Liang ZP</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Purpose: To enable simultaneous high-resolution mapping of brain function and metabolism.
                                </p>
                                <p>
                                Methods: An encoding scheme was designed for interleaved acquisition of functional MRI (fMRI) data in echo volume imaging trajectories and MR spectroscopic imaging (MRSI) data in echo-planar spectroscopic imaging trajectories. The scheme eliminates water and lipid suppression and utilizes free induction decay signals to encode both functional and metabolic information with ultrashort TE, short TR, and sparse sampling of 
                                (k,t) -space. A subspace-based image reconstruction method was introduced for processing both the fMRI and MRSI data. The complementary information in the fMRI and MRSI data sets was also utilized to improve image reconstruction in the presence of intrascan head motion, field drift, and tissue susceptibility changes.
                                </p>
                                <p>
                                Results: In-vivo experimental results were obtained from healthy human subjects in resting-state fMRI/MRSI experiments. In these experiments, the proposed method was able to simultaneously acquire metabolic and functional information from the brain in high resolution. For scans of 6.5 minutes, we achieved 3.0 × 3.0 × 1.8 mm3 spatial resolution for fMRI, 1.9 × 2.5 × 3.0 mm3 nominal spatial resolution for MRSI, and 1.9 × 1.9 × 1.8 mm3 nominal spatial resolution for quantitative susceptibility maps.
                                </p>
                                <p>
                                Conclusion: This work demonstrates the feasibility of simultaneous high-resolution mapping of brain function and metabolism with improved spatial resolution and synergistic image reconstruction.
                                </p>
                                <p>
                                Keywords: QSM; SPICE; fMRI; partial separability; sparse sampling; ultra-high-resolution MRSI.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/31294487/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 26 */}
            <div className='singlePublication' data-year='2019'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-26.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Multimodal classification of drug-naïve first-episode schizophrenia combining anatomical, diffusion and resting state functional resonance imaging
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Neuroscience Letters</em> in 2019</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhuang H, Liu R, Wu C, Meng Z, Wang D, Liu D, Liu M, and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            The accurate diagnosis in the early stage of schizophrenia (SZ) is of great importance yet remains challenging. The classification between SZ and control groups based on magnetic resonance imaging (MRI) data using machine learning method could be helpful for SZ diagnosis. Increasing evidence showed that the combination of multimodal MRI data might further improve the classification performance However, medication effect has a profound influence on patients’ anatomical and functional features and may reduce the classification efficiency. In this paper, we proposed a multimodal classification method to discriminate drug-naïve first-episode schizophrenia patients from healthy controls (HCs) by a combined structural MRI, diffusion tensor imaging (DTI) and resting state-functional MRI data. To reduce the feature dimension of multimodal data, we applied sparse coding (SC) for feature selection and multi-kernel support vector machine (SVM) for feature combination and classification. The best classification performance with the classification accuracy of 84.29% and area under the receiver operating characteristic (ROC) curve (AUC) of 81.64% was achieved when all modality data were combined. Interestingly, the identified functional markers were mainly found in default mode network (DMN) and cerebellar connections, while the structural markers were within limbic system and prefrontal–thalamo–hippocampal circuit.
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304394019302812" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 27 */}
            <div className='singlePublication' data-year='2019'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-27.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Modular functional-metabolic coupling alterations of frontoparietal network in schizophrenia patients
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Frontiers in Neuroscience</em> in 2019</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Xiang Q, Xu J, Wang Y, Chen T, Wang J, Zhuo K, Guo X, Zeljic K, Li W, Sun Y, Wang Z, Li Y*, and Liu D</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background: Brain functional dysconnectivity, as well as altered network organization, have been demonstrated to occur in schizophrenia. Brain networks are increasingly understood to exhibit modular community structures, which provides advantages in robustness and functional adaptivity. The frontoparietal network (FPN) serves as an important functional module, and metabolic and functional alterations in the FPN are associated with the pathophysiology of schizophrenia. However, how intra-modular biochemical disruptions lead to inter-modular dysfunction of the FPN, remains unclear. In this study, we aim to investigate alterations in the modular functional-metabolic coupling of the FPN, in patients with schizophrenia.
                                </p>
                                <p>
                                Methods: We combined resting-state functional magnetic resonance imaging (rs-fMRI) and magnetic resonance spectroscopy (MRS) technology and acquired multimodal neuroimaging data in 20 patients with schizophrenia and 26 healthy controls. For the MRS, the dorsolateral prefrontal cortex (DLPFC) region within the FPN was explored. Metabolites including gamma aminobutyric acid (GABA), N-aspart-acetyl (NAA) and glutamate + glutamine (Glx) were quantified, using LCModel software. A graph theoretical approach was applied for functional modular parcellation. The relationship between inter/intra-modular connectivity and metabolic concentration was examined using the Pearson correlation analysis. Moreover, correlations with schizophrenia symptomatology were investigated by the Spearman correlation analysis.
                                </p>
                                <p>
                                Results: The functional topological network consisted of six modules in both subject groups, namely, the default mode, frontoparietal, central, hippocampus, occipital, and subcortical modules. Inter-modular connectivity between the frontoparietal and central modules, and the frontoparietal and the hippocampus modules was decreased in the patient group compared to the healthy controls, while the connectivity within the frontoparietal modular increased in the patient group. Moreover, a positive correlation between the frontoparietal and central module functional connectivity and the NAA in the DLPFC was found in the healthy control group (r = 0.614, p = 0.001), but not in the patient group. Significant functional dysconnectivity between the frontoparietal and limbic modules was correlated with the clinical symptoms of patients.
                                </p>
                                <p>
                                Conclusions: This study examined the links between functional connectivity and the neuronal metabolic level in the DLPFC of SCZ. Impaired functional connectivity of the frontoparietal areas in SCZ, may be partially explained by a neurochemical-functional connectivity decoupling effect. This disconnection pattern can further provide useful insights in the cognitive and perceptual impairments of schizophrenia in future studies.
                                </p>                            
                            </p>
                        </div>
                        <a href="https://www.frontiersin.org/articles/10.3389/fnins.2019.00040/full" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 28 */}
            <div className='singlePublication' data-year='2019'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-28.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Optogenetic excitation of ipsilesional sensorimotor neurons is protective in acute ischemic stroke: a laser speckle imaging study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>IEEE Transactions on Biomedical Engineering</em> in 2019</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Bo B, Li Y*, Li W, Wang Y, and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Objective: Directly modulating targeted cortical function, brain stimulation provides promising techniques for stroke intervention. However, the cellular level mechanisms underlying preserved neurovascular function remains unclear. Optogenetics provides a cell-specific approach to modulate the neuronal activity. This study aims to investigate whether the exclusive excitation of sensorimotor neurons using optogenetics in an acute stroke can protect neurovascular function and reduce infarct size.
                                </p>
                                <p>
                                Methods: Sensorimotor neurons were transfected with channelrhodopsin-2 and excited by a 473-nm laser. The photothrombotic stroke was induced in the ipsilateral parietal cortex and the targeted area for modulation remained intact. Optogenetic stimulation was carried out within 2 h after stroke in the modulation group. Using a laser speckle contrast imaging technique, we measured the cerebral blood flow at baseline, 0, 2, and 24 h after stroke, and analyzed the hemodynamic changes in both modulation (n = 12) and control (n = 9) groups. Also, the neurovascular response was measured 24 h after stroke.
                                </p>
                                <p>
                                Results: We found that neuronal-specific excitation of an ipsilesional sensorimotor cortex at an acute stage could reduce the expansion of an ischemic area and promote the neurovascular response at 24 h after stroke. The histological and behavioral results consolidate the protective effects of optogenetic-guided neuronal modulation in acute stroke.
                                </p>
                                <p>
                                Conclusion: Excitatory stimulation of ipsilesional sensorimotor neurons in an acute stroke could protect neurovascular function and reduces the expansion of ischemic area.
                                </p>
                                <p>
                                Significance: For the first time, this work demonstrates that specific neuronal modulation in the acute stroke is neuroprotective and reduces the infarct size.
                                </p>                            
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30281433/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 29 */}
            <div className='singlePublication' data-year='2019'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-29.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>The thalamic glutamate level correlates with functional connectivity with dorsal anterior cingulate cortex/middle occipital gyrus in obsessive-compulsive disorder: a combined fMRI and 1H-MRS study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Australian & New Zealand Journal of Psychiatry</em> in 2019</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Chen Y, Meng Z, Zhang Z, Zhu Y, Gao R, Cao X, Tan L, Wang Z, Zhang H, Li Y*, Fan Q, and Xiao Z</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Objective: The imbalance in neurotransmitter and neuronal metabolite concentration within cortico-striato-thalamo-cortical (CSTC) circuit contributes to obsessive-compulsive disorder's (OCD) onset. Previous studies showed that glutamate mediated upregulation of resting-state activity in healthy people. However, there have been few studies investigating the correlational features between functional and neurochemical alterations in OCD.
                                </p>
                                <p>
                                Methods: We utilize a combined resting-state functional magnetic resonance imaging (rs-fMRI) and proton magnetic resonance spectroscopy (1H-MRS) approach to investigate the altered functional connectivity (FC) in association with glutamatergic dysfunction in OCD pathophysiology. Three regions of interest are investigated, i.e., medial prefrontal cortex and bilateral thalamus, for seed-based whole-brain FC analysis as well as MRS data acquisition. There are 23 unmedicated adult OCD patients and 23 healthy controls recruited for brain FC analysis. Among them, 12 OCD and 8 controls are performed MRS data acquisition.
                                </p>
                                <p>
                                Results: Besides abnormal FC within CSTC circuit, we also find altered FCs in large-scale networks outside CSTC circuit, including occipital area and limbic and motor systems. The decreased FC between right thalamus and right middle occipital gyrus (MOG) is correlated with glutamatergic signal within right thalamus in OCD patients. Moreover, the FC between right thalamus and right dorsal anterior cingulate cortex (dACC) is associated with glutamate level in right thalamus, specifically in patient's group. Finally, the FC between right thalamus and right MOG is correlated with patient's Yale-Brown Obsessive Compulsive Scale (YBOCS) compulsion and total scores, while the right thalamic glutamatergic signal is associated with YBOCS-compulsion score.
                                </p>
                                <p>
                                Conclusion: Our findings showed that the coupled intrinsic functional-biochemical alterations existed both within CSTC circuit and from CSTC to occipital lobe in OCD pathophysiology.
                                </p>                            
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30354192/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

             {/* Section 30 */}
             <div className='singlePublication' data-year='2018'>
             <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-30.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Elevated hippocampal choline level is associated with altered functional connectivity in females with major depressive disorder: A pilot study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Psychiatry Research: Neuroimaging</em> in 2018</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Tang Y, Zhang X, Sheng J, Zhang J, Zhu Y, Wang J, Zhang T, Zhuo K, Zhang X, Tong S,  Li Y*, and Wang J</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Metabolic and functional alterations in hippocampus have been associated with the pathophysiology of major depressive disorder (MDD). However, how the hippocampal biochemical disruptions lead to dysfunction of limbic-cortical circuit remains unclear. The present pilot study combined magnetic resonance spectroscopy (MRS) and resting-state functional magnetic resonance imaging (rs-fMRI) to investigate the hippocampal metabolic alteration and its relationship with the intrinsic functional connectivity (FC) changes in MDD. Both MRS and fMRI data were obtained from twelve women with MDD and twelve age-matched, healthy women. Bilateral hippocampi were chosen as regions of interest, in which metabolite concentrations of total choline (tCho), N-acetylaspartate and creatine were quantified. Bilateral hippocampal FC to the whole brain and its correlations with hippocampal metabolite concentrations were conducted. Females with MDD showed significantly elevated left hippocampal tCho level, and decreased anti-correlations between the left hippocampus and bilateral superior frontal gyrus (SFG), left inferior frontal gyrus, and right superior temporal gyrus. More importantly, the left hippocampal tCho level was associated with FC to the right SFG and right fusiform gyrus in healthy women, whereas it was significantly associated with FC to the right lingual gyrus in women with MDD. Our findings suggested that regional metabolic alterations in the left hippocampus might be related to the network-level dysfunction.                         
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/29880254/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 31 */}
            <div className='singlePublication' data-year='2018'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-31.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Anterior thalamic radiation structural and metabolic changes in obsessive-compulsive disorder: a combined DTI-MRS study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Psychiatry Research: Neuroimaging</em> in 2018</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Wang R, Fan Q, Zhang Z, Chen Y, Zhu Y and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Numerous studies indicate the cortico-striato-thalamo-cortical (CSTC) circuit plays an important role in the pathophysiology of obsessive-compulsive disorder (OCD). The anterior thalamic radiation (ATR), as a major fiber in the fronto-thalamic circuitry, contributes to symptomology of OCD. However, the underlying biochemical mechanism in relation with its structural alteration remains not understood. This study investigated the structural abnormality of ATR and its correlation with thalamic metabolic alteration in OCD, using diffusion tensor image (DTI) and proton magnetic resonance spectroscopy (1H-MRS). Twenty-six unmedicated adult OCD patients and twenty-six matched healthy controls participated in DTI study. Thirteen OCD patients and thirteen healthy controls, a subset of DTI participants, took part in MRS study. The results showed that mean fiber length of right ATR negatively correlated with ipsilateral thalamic choline (Cho) level in OCD patients. Additionally, significantly higher Cho concentration was detected in right thalamus of OCD patients compared to healthy controls. Moreover, the mean fractional anisotropy (FA) value of right ATR positively correlated with patients Yale-Brown Obsessive Compulsive Scale (YBOCS) total score, as well as YBOCS compulsion score. These results suggested the coupling of structural and metabolic changes in right ATR, which might serve as a multi-modal biomarker contributing to the pathogenesis of OCD.
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/29807209/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 32 */}
            <div className='singlePublication' data-year='2018'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-32.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Correlates of residual limb pain: from residual limb length and usage to metabolites and activity in secondary somatosensory cortex
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>IEEE Transactions on Neural Systems and Rehabilitation Engineering</em> in 2018</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Guo X, Lyu Y, Wang Z, Li Y, Xiang J, Pan C, Flor H, and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Most recent studies attribute residual limb pain to peripheral pathological changes of the stump. However, in this paper, we focus on its associations with the residual limb length, usage, as well as the metabolic and functional alterations of the brain. The secondary somatosensory cortex (S2), one important area involved in pain intensity discrimination, was selected as the region of interest. Twenty-two upper-limb amputees were recruited and divided into two groups, i.e., amputees with residual limb pain (9/22) and without residual limb pain (13/22). The residual limb length, usage, as well as the metabolite concentration, resting-state activity and BOLD responses to the tactile stimulation in the contralateral S2, were compared between the two groups and correlated with the pain intensity. The amputees with residual limb pain showed significantly shorter length and less usage of the residual limb than the amputees without residual limb pain, and the pain intensity was significantly negatively correlated with the residual limb length and usage. In addition, the pain intensity was significantly correlated with the tNAA/tCr ratio, resting-state fALFF in the slow-4 band, and BOLD response to the tactile stimulation in the contralateral S2, although there were no significant group differences. Regression analysis suggested that residual limb pain is associated with shorter residual limb length and less residual limb usage.
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30530331/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 33 */}
            <div className='singlePublication' data-year='2017'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-33.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Intrinsic functional connectivity alteration of dorsal and rostral anterior cingulate cortex in obsessive-compulsive disorder: A resting fMRI study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Neuroscience Letters</em> in 2017</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang Z, Fan Q, Zhu Y, Tan L, Chen Y, Gao R, Zhang H, Li Y* and Xiao Z</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            Cortico–striato–thalamo–cortical (CSTC) circuit has been implicated in OCD pathophysiology by converging neuroimaging findings. The anterior cingulate cortex (ACC), as an important part within CSTC circuit, plays a critical role in OCD etiology. The ACC can be divided into dorsal and rostral parts anatomically, which are involved in cognitive process and emotional function, respectively. However, the diverse function of intrinsic signals from dorsal and rostral ACC regions remains unclear in OCD study. In this work, we applied resting-state functional magnetic resonance imaging (rs-fMRI) technology to investigate and differentiate the functional connectivity (FC) characteristics between dACC and rACC in unmedicated OCD patients. Also, the correlation between the altered FC and clinical symptom severity was analyzed. Decreased FC of rACC-DLPFC and increased FC between dACC and caudate were found. Moreover, the altered dACC-caudate FC was positively correlated with total Y-BOCS and compulsion score in OCD patients. Our findings implied the crossed function of dorsal and rostral circuits in the pathophysiologic mechanism of OCD. The dorsal cingulate-striatum functional pathway served as a potential biomarker for OCD symptomatology and merits further investigations.
                            </p>
                        </div>
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304394017305062" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>


            {/* Section 34 */}
            <div className='singlePublication' data-year='2017'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-34.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Hemodynamic effects of intraoperative anesthetics administration in photothrombotic stroke model: a study using laser speckle imaging
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>BMC Neuroscience</em> in 2017</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Lu H, Li Y*, Bo B, Yuan L, Lu X, Li H, and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background
                                Previous neuroimaging studies have shown the hemodynamic effect of either preconditioning or postconditioning anesthesia in ischemic stroke model. However, the anesthetic effect in hemodynamics during and immediately after the stroke modeling surgery remains unknown due to the lack of appropriate anesthesia-free stroke model and intraoperative imaging technology. In the present study, we utilized our recently developed photothrombotic model of focal cerebral ischemia in conscious and freely moving rats, and investigated transient hemodynamic changes with or without isoflurane administration. Laser speckle imaging was applied to acquire real-time two-dimensional full-field cerebral blood flow (CBF) information throughout the surgical operations and early after.
                                </p>
                                <p>
                                Results
                                Significantly larger CBF reduction area was observed in conscious rats from 8 min immediately after the onset of stroke modeling, compared with anesthetized rats. Stroke rats without isoflurane administration also showed larger lesion volume identified by magnetic resonance imaging 3 h post occlusion (58.9%), higher neurological severity score 24 h post occlusion (28.3%), and larger infarct volume from 2,3,5-triphenyltetrazolium chloride staining 24 h post occlusion (46.9%).
                                </p>
                                <p>
                                Conclusions
                                Our results demonstrated that the hemodynamic features were affected by anesthetics at as early as during the stroke induction. Also, our findings about the neuroprotection of intraoperative anesthetics administration bring additional insights into understanding the translational difficulty in stroke research.
                                </p>                            
                            </p>
                        </div>
                        <a href="https://bmcneurosci.biomedcentral.com/articles/10.1186/s12868-016-0327-y" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 35 */}
            <div className='singlePublication' data-year='2016'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-35.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Functional lateralization in cingulate cortex predicts motor recovery after basal ganglia stroke
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Neuroscience Letters</em> in 2016</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Li Y, Chen Z, Su X, Zhang X, Wang P, Zhu Y, Xu Q, Xu J and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            The basal ganglia (BG) is involved in higher order motor control such as movement planning and execution of complex motor synergies. Neuroimaging study on stroke patients specifically with BG lesions would help to clarify the consequence of BG damage on motor control. In this paper, we performed a longitudinal study in the stroke patients with lesions in BG regions across three motor recovery stages, i.e., less than 2week (Session 1), 1-3m (Session 2) and more than 3m (Session 3). The patients showed an activation shift from bilateral hemispheres during early sessions (&lt;3m) to the ipsilesional cortex in late session (&gt;3m), suggesting a compensation effect from the contralesional hemisphere during motor recovery. We found that the lateralization of cerebellum(CB) for affected hand task correlated with patients' concurrent Fugl-Meyer index (FMI) in Session 2. Moreover, the cingulate cortex lateralization index in Session 2 was shown to significantly correlate with subsequent FMI change between Session 3 and Session 2, which serves as a prognostic marker for motor recovery. Our findings consolidated the close interactions between BG and CB during the motor recovery after stroke. The dominance of activation in contralateral cingulate cortex was associated with a better motor recovery, suggesting the important role of ipsilesional attention modulation in the early stage after BG stroke.                        
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/26742641/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 36 */}
            <div className='singlePublication' data-year='2016'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-36.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Altered neuronal spontaneous activity correlates with glutamate concentration in medial prefrontal cortex of major depressed females: an fMRI-MRS study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Affective Disorders</em> in 2016</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhang X, Tang Y, Maletic-Savatice M, Sheng J, Zhang X, Zhu Y, Zhang T, Tong S, Wang J and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background: Major depressive disorder (MDD) is twice more prevalent in females than in males. Yet, there have only been a few studies on the functional brain activity in female MDD patients and the detailed mechanisms underlying their neurobiology merit further investigations. In the present work, we used combined fMRI-MRS methods to investigate the altered intrinsic neuronal activity and its association with neurotransmitter concentration in female MDD patients.
                                </p>
                                <p>
                                Methods: The whole brain amplitude of low frequency fluctuation (ALFF) analysis using resting state functional magnetic resonance imaging (fMRI) was performed to explore the alteration of intrinsic neuronal signals in MDD females (n=11) compared with female healthy controls (n=11). With a specific interest in the medial prefrontal cortex (mPFC) area, we quantified the concentration of amino acid neurotransmitters including GABA ((r-aminobutyric acid)), Glu (Glutamate), and Glx (Glutamate + Glutamine) using (1)H-MRS technology. Moreover, we conducted Pearson correlation analysis between the ALFF value and neurotransmitter concentration to find out the functional-biochemical relation in mPFC area. The relationship between the metabolites concentration and MDD symptomatology was also examined through Spearman correlation analysis.
                                </p>
                                <p>
                                Results: We found that the female MDD patients showed increased neuronal spontaneous activity in left medial prefrontal cortex (mPFC) and left middle frontal cortex, with decreased ALFF level in right putamen and right middle temporal cortex (p&lt;0.01, Alphasim corrected). The ALFF in mPFC was shown positively correlated with Glu concentration in female MDD patients (r=0.67, p=0.023). The Glu concentration in mPFC was positively correlated with patients HAMA scores (r=0.641, p=0.033).
                                </p>
                                <p>
                                Limitations: The relatively small sample size, metabolite information acquired only in mPFC and not all patients were unmedicated are the major limitations of our study.
                                </p>
                                <p>
                                Conclusions: Using combined fMRI-MRS methods, we found increased spontaneous neuronal activity was correlated with Glu concentration in mPFC of female MDD patients. Other regions including left middle frontal gyrus, right putamen and middle temporal gyrus also showed altered spontaneous neuronal activities. The abnormal intrinsic neuronal activities in fronto-cortical regions shed light on the pathogenesis underlying MDD females. The multimodal resting-state neuroimaging technique served as a useful tool for functional-biochemical investigation of MDD pathophysiology.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/27235818/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 37 */}
            <div className='singlePublication' data-year='2016'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-37.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Altered intrinsic insular activity predicts symptom severity in unmedicated obsessive-compulsive disorder patients: a resting state functional magnetic resonance imaging study
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>BMC Psychiatry</em> in 2016</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhu Y, Fan Q, Zhang H, Qiu J, Tan L, Xiao Z, Tong S, Chen J and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background: Previous neuroimaging data indicated that the dysfunction in cortico-striato-thalamo-cortical (CSTC) circuit contributed to the neuropathological mechanism of obsessive-compulsive disorder (OCD). Whereas, emerging work has shown that the pathophysiology of OCD might be related to more widely distributed large-scale brain systems including limbic system and the salience network. This study aims to investigate the aberrant spontaneous neuronal activity within the whole brain, and its association with the symptom severity for unmedicated OCD patients.
                                </p>
                                <p>
                                Method: Twenty-eight unmedicated OCD adults and twenty-eight matched healthy controls were recruited for a resting state functional magnetic resonance imaging (fMRI) study. The amplitude of low-frequency fluctuation (ALFF) analysis over whole brain was performed to examine the intrinsic cerebral activity of subjects. In addition, we conducted the voxel-based Pearson's correlative analysis to probe into the relationship between ALFF values and symptom severity for OCD patients.
                                </p>
                                <p>
                                Results: Our results showed that OCD patients had increased ALFF measures in the left frontopolar cortex and left orbital frontal cortex (OFC), with decreased ALFF values in the right insula. Moreover, the right insular intrinsic activity was significantly correlated with total YBOCS score (r = 0.611, p = 0.002) and compulsion score (r = 0.640, p = 0.001) for OCD patients.
                                </p>
                                <p>
                                Conclusion: The results showed abnormal intrinsic neuronal activity within CSTC circuit and salience network of OCD patients. Our finding of aberrant insular activity advanced the understanding of OCD pathophysiology beyond the traditional CSTC circuit. To the best of our knowledge, it is the first finding about a reduced insular activity at the resting state for unmedicated OCD patients, which might serve as an informative biomarker for OCD pathophysiology.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/27084762/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

            {/* Section 38 */}
            <div className='singlePublication' data-year='2016'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-38.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Plastic Change along the Intact Crossed Pathway in Acute Phase of Cerebral Ischemia Revealed by Optical Intrinsic Signal Imaging
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Neural Plasticity</em> in 2016</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Guo X, He Y, Lu H, Li Y, Su X, Jiang Y and Tong S</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                            The intact crossed pathway via which the contralesional hemisphere responds to the ipsilesional somatosensory input has shown to be affected by unilateral stroke. The aim of this study was to investigate the plasticity of the intact crossed pathway in response to different intensities of stimulation in a rodent photothrombotic stroke model. Using optical intrinsic signal imaging, an overall increase of the contralesional cortical response was observed in the acute phase (&lt;=48h) after stroke. In particular, the contralesional hyperactivation is more prominent under weak stimulations, while a strong stimulation would even elicit a depressed response. The results suggest a distinct stimulation-response pattern along the intact crossed pathway after stroke. We speculate that the contralesional hyperactivation under weak stimulations was due to the reorganization for compensatory response to the weak ipsilateral somatosensory input.
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/27144032/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

             {/* Section 39 */}
             <div className='singlePublication' data-year='2015'>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="../../images/p-39.webp"
                    />
                </div>
                <div className='right'>
                    <div>
                        <div>
                            <h4>Decreased thalamic glutamate level in unmedicated adult obsessive compulsive disorder patients detected by proton magnetic resonance spectroscopy
                            </h4>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>in <em>Journal of Affective Disorders</em> in 2015</p></div><div>
                            <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Zhu Y, Fan Q, Han X, Zhang H, Chen J, Wang Z, Zhang Z, Tan L, Xiao Z, Tong S, Maletic-Savatic M and Li Y*</strong>
                            </p>
                        </div>
                        <div>
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <p>
                                Background: Previous neuroimaging studies implied that the dysfunction of cortico-striato-thalamo-cortical (CSTC) circuit served as the neural basis for the pathophysiology of obsessive-compulsive disorder (OCD). The imbalances in neuronal metabolite and neurotransmitter within CSTC circuit have been shown as the leading reasons of the OCD onset. The aim of this study is to investigate the metabolic alterations, especially the glutamatergic signal dysfunction within CSTC circuit, and the relationships between neural metabolites and the symptom severity of OCD patients.
                                </p>
                                <p>
                                Methods: Single voxel magnetic resonance spectroscopy (MRS) was conducted in medial prefrontal cortex (mPFC) and bilateral thalamus areas for thirteen unmedicated adult OCD patients with age-, gender-, and education-matched healthy controls. Quantification and multivariate analysis were performed to identify vital metabolic biomarkers for patients and healthy controls group differentiation. Moreover, we performed Spearman׳s rank correlation analysis for OCD patients to examine the relationship between the metabolite concentration level and OCD symptomatology.
                                </p>
                                <p>
                                Results: Patients with OCD showed significantly decreased glutamate level in mPFC (p=0.021) and right thalamus (p=0.039), and significantly increased choline compounds in left thalamus (p=0.044).The glutamate in right thalamus was shown as the most important metabolite for group separation from multivariate analysis (Q(2)=0.134) and was significantly correlated with the patients׳ compulsion scores (Spearman r=-0.674, p=0.016).
                                </p>
                                <p>
                                Limitations: Limited sample size, the use of creatine and phosphocreatine (Cr) ratios rather than absolute concentrations and unresolved glutamine (Gln) are limitations of the present study.
                                </p>
                                <p>
                                Conclusion: Our study results consolidated the hypothesis about glutamatergic signaling dysfunction in OCD. To our knowledge, it is the first finding about a reduced thalamic glutamate level in adult unmedicated OCD patients. The dysregulation of glutamate serves as a potential target for the OCD pharmacotherapy and the detailed mechanisms underlying the glutamate alterations within CSTC circuits merit further investigations.
                                </p>
                            </p>
                        </div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/25819113/" style={{ whiteSpace: "pre-wrap" }}>Read more</a>
                    </div>
                </div>
            </div>
            </div>

        </>

    )
}

const PublicationGallery = () => {
    const [selectedItem, setSelectedItem] = React.useState(1);

    React.useEffect(()=>{
        filter(1);
    }, [])

    const filter = (index: Number) => {
        let publications = document.querySelectorAll('.singlePublication');
        publications.forEach(pub => {
            let year = Number(pub.getAttribute("data-year"));
           
            switch(index)
            {
                case 1: 
                    if(year >= 2021 || year==0) {
                        (pub as HTMLDivElement).style.setProperty("display", "block");
                    }
                    else {
                        (pub as HTMLDivElement).style.setProperty("display", "none");
                    }
                    break;
                case 2: 
                    if(year == 2020) {
                        (pub as HTMLDivElement).style.setProperty("display", "block");
                    }
                    else {
                        (pub as HTMLDivElement).style.setProperty("display", "none");
                    }
                    break;
                case 3: 
                    if(year == 2019) {
                        (pub as HTMLDivElement).style.setProperty("display", "block");
                    }
                    else {
                        (pub as HTMLDivElement).style.setProperty("display", "none");
                    }
                break;
                case 4: 
                    if(year <= 2018 && year > 2010) {
                        (pub as HTMLDivElement).style.setProperty("display", "block");
                    }
                    else {
                        (pub as HTMLDivElement).style.setProperty("display", "none");
                    }
                break;
            }
            
        });
    }
    
    const onFilterClick = (index: number) => {
        setSelectedItem(index);
        filter(index);
    }

    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>发表论文</h1>
                <div className='news-filter'>
                    <div className={selectedItem == 1? 'item-selected': 'item-unselected'} onClick={() => onFilterClick(1)}>2021~至今</div>
                    <div className={selectedItem == 2? 'item-selected': 'item-unselected'} onClick={() => onFilterClick(2)}>2020</div>
                    <div className={selectedItem == 3? 'item-selected': 'item-unselected'} onClick={() => onFilterClick(3)}>2019</div>
                    <div className={selectedItem == 4? 'item-selected': 'item-unselected'} onClick={() => onFilterClick(4)}>2010~2018</div>
                </div>
                {
                    getPublicationList()
                }
                {/* {publicationData.map((data, index) => {
                    return (
                        <div className="" key={index}>
                            <SinglePublication data={data} />
                        </div>
                    );
                })} */}
            </div>
            <div className="footerWrapper" style={{marginTop:"20px"}}>
            <Footer />
            </div>
        </div>
        // <>
        //     {news.map((data, index) => {
        //         return (
        //             <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
        //                 <SingleNews data={data} />
        //             </div>
        //         );
        //     })}
        // </>
    )
}

export default PublicationGallery;