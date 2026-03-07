import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 — KOGEI CODE",
};

export default function TokushohoPage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody className="divide-y divide-white/[0.06]">
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                事業者名
              </th>
              <td className="py-4 text-sm text-white/70">KOGEI CODE</td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                代表者
              </th>
              <td className="py-4 text-sm text-white/70">
                請求があった場合、遅滞なく開示いたします
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                所在地
              </th>
              <td className="py-4 text-sm text-white/70">
                請求があった場合、遅滞なく開示いたします
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                連絡先
              </th>
              <td className="py-4 text-sm text-white/70">
                お問い合わせフォームよりご連絡ください
                <br />
                <span className="text-xs text-white/40">
                  ※電話番号は請求があった場合、遅滞なく開示いたします
                </span>
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                販売価格
              </th>
              <td className="py-4 text-sm text-white/70">
                個別のご案内にてお知らせいたします
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                販売価格以外の必要料金
              </th>
              <td className="py-4 text-sm text-white/70">
                年間維持費（管理費・保険料・係留費等）が別途発生します。詳細はブリーフィング時にご説明いたします。
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                お支払い方法
              </th>
              <td className="py-4 text-sm text-white/70">
                銀行振込
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                お支払い時期
              </th>
              <td className="py-4 text-sm text-white/70">
                契約締結後、別途定める期日までにお支払いいただきます
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                引渡し時期
              </th>
              <td className="py-4 text-sm text-white/70">
                ご入金確認後、契約書に定める期日にて共同所有権の移転手続きを行います
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                返品・キャンセル
              </th>
              <td className="py-4 text-sm text-white/70">
                共同所有権の特性上、契約締結後の返品・キャンセルは原則として承りかねます。
                詳細は契約書にて定めます。
              </td>
            </tr>
            <tr>
              <th className="w-1/3 py-4 pr-6 text-left align-top text-xs font-medium text-white/50">
                申込みの撤回
              </th>
              <td className="py-4 text-sm text-white/70">
                契約締結前であれば、お申込みの撤回が可能です
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-white/30">制定日: 2026年3月7日</p>
    </LegalLayout>
  );
}
